import { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]  = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
                <label>First Name</label>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                <label>Last  Name</label>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PersonForm;