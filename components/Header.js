const Header = ()=>{
    return(
        <div className="header">
            <div className="header-title">
                <h1 className="title">dev.Ardha</h1>
                <p>a Full-Stack Developer Personal Blog</p>
            </div>

            <style jsx>{`
            
            .header{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;

                padding:0 10%;

                width:100%;
                height:300px;
                background-color:#fff;
            }
            .title{
                font-size:4rem;
            }
            p{
                margin-top:10px;
                text-align:center;
            }
            
            `}</style>
        </div>
    )
}

export default Header;