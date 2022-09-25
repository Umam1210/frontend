import React from 'react'
import { Navigate } from 'react-router-dom'
// import { useQuery } from 'react-query'
// import { API } from '../config/api'
// import { useNavigate, useParams } from 'react-router-dom'


const PrivateRoute = (props) => {
    // let navigate = useNavigate()
    const auth = localStorage.token  ? true : false
    // const auth = (response.data.data.role === 'Custumer')
    // let { auth } = useQuery('usersCache', async () => {
    //     const response = await API.get('/check-auth');
    //     // console.log("ini response",response)
    //     return response.data.data;

    //   });

    // if (response.data.data.role === 'Admin') {
    //     navigate('/list-transaction');
    //   } else {
    //     navigate('/home');
    //   }

    if (!auth) return <Navigate to="/" />

    return props.children


}

export default PrivateRoute