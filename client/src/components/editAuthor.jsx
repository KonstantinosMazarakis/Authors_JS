import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useHistory } from "react-router-dom";
import { useParams } from "react-router";


const EditAuthor = () =>{
    let [name,setName] = useState("")
    let[validations,setValidations] = useState({})
    const history = useHistory()
    const {_id} = useParams();


    const AddAuthor = (e) =>{
        e.preventDefault()

        let formInfo = {name};

        axios.put(`http://localhost:8000/api/authors/${_id}`,formInfo)
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

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                setName(res.data.results.name)
            })
            .catch(err=>{
                history.push('/authors/unrecognized')
                console.log("error 404... no API found." + err)
            })

    }, [])


    return<>
    <Link to="/">Home</Link>
    <h3>Edit this Author:</h3>
    <form onSubmit={AddAuthor}>
    <p className='text-danger'>{validations.name?.message}</p>
        <label>Name: </label>
        <input type="text" className='m-2' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <div>
        <Link to="/" className='btn btn-info m-2'>Cancel</Link>
        <input type="submit" className='btn btn-info m-2' value="Submit"/>
        </div>
    </form>
    </>
}

export default EditAuthor