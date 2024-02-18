import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'

const Login = () => {
    //state

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const clickLoginApp = async() => {
       try {
        const url = "https://workshop-react-api.vercel.app/login"
        //ใช้ได้
        const res = await axios.post(url,{username, password})
        const decode = jwtDecode(res.data.token)

        console.log(res.data.token);

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', decode.user_id)

        setTimeout(()=>{
            window.location.reload()
        },1100);
       } catch (error) {
        console.log(error);
       }

    }
    return (
        <div className=' bg-gray-300 h-screen flex justify-center items-center'>
            <div className=' bg-white px-40 py-10 rounded-lg shadow-lg'>
                <h2 className=' text-2xl  text-center'>Sign Up</h2>
                {/* username : {username} <br></br>
                password : {password}  */}
                <div className=' flex flex-col mt-5'>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full p-2   text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
                        placeholder="Username">
                    </input>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full p-2 mt-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                        placeholder="password">
                    </input>

                    <button onClick={clickLoginApp} className=' rounded bg-cyan-900 text-white font-bold mt-4 py-1' >Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Login
