const Footer = ()=> {
    return(
        <>
        <div className="footer">

            <div className="credit">
                <span>Made with ❤️ by dev.ardha</span>
            </div>
        </div>
        <style jsx>{`
        
        .footer{
            width:100%;
            height:300px;
            display:flex;
            background-color:#fff;
            border-top:1px solid #eee;
            position:relative;
        }
        .credit{
            position:absolute;
            bottom:0;
            padding: 10px 0 30px 0;
            text-align:center;
            width:100%;
        }
        
        `}</style>
        </>
    )
}

export default Footer;