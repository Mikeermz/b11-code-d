import React,{useState,useEffect} from 'react';

const Side = ({name}) => {
    
    const message = `Hello, ${name}!`;
   

    useEffect(() => {
        document.title = `Greetings to ${name}`;
       
    }, [name])
    
    return (
            <>
            <div>{message}</div>
            </>
    )
}

export default Side;