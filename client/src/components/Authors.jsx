import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Authors = () =>{
    let [report, setReport] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {

                //--------SORTING-----------------------
                response.data.results.sort(function(a, b) {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  })
                  //---------SORTING-------------------

                setReport(response.data.results)
            }).catch(err => {
                console.log("error 404... no API found." + err)
            })

    },[])

    const deleteAuthor = (id) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
                .then(res=>{
                    let filteredList = report.filter((authorsObj)=>{
                        return authorsObj._id != id
                    })
                    setReport(filteredList)
                })
                .catch(err=>{
                    console.log("error 404... no API found." + err)
                })
        
    }

    return<>
    <Link to="/authors/add">Add an Author</Link>
    <h3>We have quotes by:</h3>
    <table className="table table-striped w-auto mx-auto" >
        <thead>
            <tr>
                <th>Author</th>
                <th>Actions available</th>
            </tr>
        </thead>
        <tbody>
        {
            report.map((authorsObj)=>{
                return<tr key={authorsObj._id}>
                    <td>{authorsObj.name}</td>
                    <td><Link to={`/authors/edit/${authorsObj._id}`} className='btn btn-info'>Edit</Link></td>
                    <td><button onClick={()=>{deleteAuthor(authorsObj._id)}} className='btn btn-danger'>Delete</button></td>
                </tr>
            })
        }
        </tbody>
    </table>
    </>
}

export default Authors