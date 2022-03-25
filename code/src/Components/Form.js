import React, { useState } from 'react'

export const Form = (  { newMessage, onNewMessage }) => {


return (
        <form >
            <h1>Welcome type stuff</h1>
            <textarea value={newMessage} onChange={onNewMessage} />
            <button type="submit">Send Happy Thought!</button>
        </form>
    )
}

export default Form;