import React from "react"
import { Button } from "./Button"

type FormItems = {
    
    reqType: string;
    setReqType: (type: string) => void;
}

export const Form: React.FC<FormItems> = ({reqType, setReqType}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText = "posts"
                reqType = {reqType}
                setReqType = {setReqType}
            />

            <Button
                buttonText = "posts/1/comments"
                reqType = {reqType}
                setReqType = {setReqType}
            />

            <Button
                buttonText = "posts/1"
                reqType = {reqType}
                setReqType = {setReqType}
            />

            <Button
                buttonText = "comments?postId=1"
                reqType = {reqType}
                setReqType = {setReqType}
            />
        </form>
    )
}