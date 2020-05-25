
export default (props) => {
    return(
        <div>
            <div className="forbidden-page-container">
                <h1 className="error-code">{props.code}</h1>
                <h3 className="error-message">Monyet Nggak Boleh Masuk!</h3>
            </div>
            <style jsx>{`
            .forbidden-page-container{
                height:100vh;
                width:100%;
                background-color:#000;

                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center
            }
            h1, h3{
                color: #fff;
            }
            .error-code{
                font-size:10rem;
            }
            .error-message{
                text-transform:uppercase;
                font-weight:800;
                font-size:1.1rem;
            }
            
            `}</style>
        </div>
        
    )
}