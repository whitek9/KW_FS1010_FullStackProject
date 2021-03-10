import React, { useEffect, useState } from 'react'
import parseJwt from '../../helperFunctions/authHelper'
import { useHistory } from "react-router-dom";

const Listings = () => {
    
    // useEffect function leveraged from example-master file provided in the sample from the course material

    let history = useHistory();
    
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])

    return (
        <div>
            <h1>This is the submissions page!</h1>
        </div>
    )
}

export default Listings