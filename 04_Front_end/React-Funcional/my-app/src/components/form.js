import React,{useState} from 'react';

const Form = () => {
    const [data, setData] = useState(
        {
            name: '',
            lastname: ''
         }
    )

    const sendData = ( e ) => {
        e.preventDefault();
        console.log(typeof(data.name))
        console.log('sending....',  data.name + ' ' + data.lastname)
    }

    const handleDataFields = ( e ) => {
        //  console.log('elemento',e.target)  document.getElementById('test).value
         // console.log( 'atributo name',e.target.name )
        //  console.log( 'atributo value',e.target.value )

        setData({
            ...data,
            [e.target.name] : e.target.value    //name : "carlos"   lastname: "fuentes"
        })
       
    }
   
    
    return (
        <>
            <h1>Contact Form</h1>
            <form className="row" onSubmit= {(e) => sendData(e)}>
                <div>
                    <div className="col-md-3">
                        <input type="text" placeholder ="Name" className="form-control" onChange= { (e)=> handleDataFields(e)} name="name"></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder ="lastName" className="form-control" onChange={ (e)=> handleDataFields(e)} name="lastname"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Send!</button>
                </div>


            </form>
            <ul>
                <li>{data.name }</li>
                <li>{data.lastname}</li>
            </ul>
        
         </>
    )
}

export default Form;