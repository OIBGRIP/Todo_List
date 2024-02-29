import React from "react";

type ListItem = {
    userId : number;
    id: number;
    title: string;
    body: string;
    name : string;
    email : string;
    postId : number;
}

type ListItemsProps = {
    items: ListItem[]; 
}

export const ListItems: React.FC<ListItemsProps> = ({ items }) => {
    return (
        <ul>
            {Array.isArray(items) ? (
            items.map(item => (
                <li key={item.id}>
                    {JSON.stringify(item)}
                </li>
            ))

            ) : (
                <li>No Items Available</li>
            )} 

        </ul>
    );
}