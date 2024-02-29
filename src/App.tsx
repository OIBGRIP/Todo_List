import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { ListItems } from './components/ListItems';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems =async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json();
        console.log('API_response',response)
        setItems(data)
      }
      catch (error){
        console.error("Error Fetching data",error)
      }
      
    }
    fetchItems()
  },[reqType])

  



  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      <ListItems items={items} />
      
    </div>
  );
}

export default App;
