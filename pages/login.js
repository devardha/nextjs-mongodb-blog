export default ()=> {
    return(
        <>
        <div className="page">
            <h1>Login</h1>
            <form action="">
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password"/>
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