import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Cookie from 'js-cookie'
import Head from 'next/head'

export default ()=> {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    
        const user = {
          email: email,
          password: password
        }

        axios.post('/api/auth/login', user)
             .then(res => Cookie.set("_token", res.data.token));
        
        Router.push('/dashboard');
    }

    return(
        <>
        <Head>
            <title>Admin Login</title>
        </Head>
        <div className="page">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"  onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        <style jsx>{`
        
        .btn{
            margin-top:20px;
        }
        input{
            height:40px;
            margin-top:10px;
            padding: 0 10px;
        }
        label{
            margin-top:20px;
        }

        .page{
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            flex-direction:column;
        }
        form{
            display:flex;
            margin-top:10px;
            flex-direction:column;
            width:23%;
        }
        .field{
            display:flex;
            flex-direction:column;
        }
        
        `}</style>
        </>
    )
}