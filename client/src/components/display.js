import React, { useEffect, useState } from 'react'
const axios = require("axios");

function Display() {
    const [userList, setUserList] = useState([])

    const apiCall = () => {
        axios
            .get('/api')
            .then((response) => {
                console.log("response", response)
                console.log("response.data", response.data)
            })
    }

    useEffect(() => {
        apiCall();
    }, [])
    return (
        <div>Display</div>
    )
}

export default Display