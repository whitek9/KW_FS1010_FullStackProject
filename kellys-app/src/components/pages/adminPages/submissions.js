import React, { useEffect, useState } from 'react'

const Submissions = () => {
    
    // useEffect function leveraged from example-master file provided in the sample from the course material
    
    const token = sessionStorage.getItem('token')
    const [listing, setListing] = useState([])
    
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
        <main>
            <h5>Contact Form Submissions</h5>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Content</th>
                        <th>Message ID</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <i>No listings found</i>
                            </td>
                        </tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => 
                            <tr>
                                <td>{entry.name}</td>
                                <td>{entry.phoneNumber}</td>
                                <td>{entry.email}</td>
                                <td>{entry.content}</td>
                                <td>{entry.id}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Submissions