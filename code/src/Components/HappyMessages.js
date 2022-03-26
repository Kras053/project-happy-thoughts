import React from 'react'
import moment from 'moment';

// 
export const HappyMessages = ({ loading, twentyThoughts, handleHearts }) => { 

           if (loading) {
            return <h1>Loading happy thoughts ...</h1>
    }

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
            <p className="post-time">{moment(twentyThoughts.createdAt).fromNow()}</p>
            <button onClick={() => handleHearts(twentyThoughts._id)}>
            <span role="img" aria-label="heart">🧡</span>
            </button> 
            <span> x {twentyThoughts.hearts}</span>
        </div>
            )
        }

export default HappyMessages