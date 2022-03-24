import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useHistory } from "react-router-dom";


const AddAuthor = () =>{
    let [name,setName] = useState("")
    let[validations,setValidations] = useState({})
    const history = useHistory()

    const AddAuthor = (e) =>{
        e.preventDefault()

        let formInfo = {name};

        axios.post("http://localhost:8000/api/authors",formInfo)
        .then(res=>{
            console.log(res);
            if(res.data.error){
                setValidations(res.data.error.errors)
            }else{
                history.push('/')
            }
        })
        .catch(err=>{
            console.log("error 404... no API found." + err)
        })
    }

    

    return<>
    <Link to="/">Home</Link>
    <h3>Add a new author:</h3>
    <form onSubmit={AddAuthor}>
    <p className='text-danger'>{validations.name?.message}</p>
        <label>Name: </label>
        <input type="text" className='m-2' onChange={(e)=>{setName(e.target.value)}}/>
        <div>
        <Link to="/" className='btn btn-info m-2'>Cancel</Link>
        <input type="submit" className='btn btn-info m-2' value="Submit"/>
        </div>
    </form>
    </>
}

export default AddAuthor