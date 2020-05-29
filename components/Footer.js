import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = ()=> {
    return(
        <>
        <div className="footer">

            <div className="credit">
                <span className="github-icon"><GitHubIcon style={{ fontSize: '2rem' }}/></span>
                <span>Made with ❤️ and a keyboard by dev.ardha</span>
            </div>
        </div>
        <style jsx>{`
        
        .github-icon{
            margin-bottom:2rem;
            cursor:pointer;
        }
        .github-icon:hover{
            color:rgb(255, 20, 147);
        }
        .footer{
            width:100%;
            height:250px;
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
            font-weight:300;
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }
        
        `}</style>
        </>
    )
}

export default Footer;