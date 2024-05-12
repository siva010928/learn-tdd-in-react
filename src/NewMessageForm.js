import { useState } from "react";

export default function NewMessageForm({onSend}) {
    const [inputText, setInputText] = useState('')
    
    function handleTextChange(event) {
        setInputText(event.target.value);
    }
    function handleClick() {
        onSend(inputText);
        setInputText('');
    }

    return (
        <>
            <input 
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}/>
            <button data-testid="sendButton" onClick={handleClick}>Send</button>
         </>
    );
  }