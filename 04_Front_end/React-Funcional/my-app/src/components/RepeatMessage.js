import React,{useEffect} from 'react'

function RepeatMessage( { message } ) {
    useEffect(() => {
        const id = setInterval( () => {
            console.log( message )
        }, 2000 );

        //cleanup function
        return () => {
           clearInterval(id)
        }
    }, [message])
    return (
        <div>
            I'm logging to console "{ message}"
        </div>
    )
}

export default RepeatMessage

//rfce to get the basic function
