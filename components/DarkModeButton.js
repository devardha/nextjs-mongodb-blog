import Brightness2Icon from '@material-ui/icons/Brightness2';

const DarkModeButton = ()=> {
    return(
        <>
        <button className="dark-mode-button">
            <Brightness2Icon/>
        </button>
        <style jsx>{`
        
        .dark-mode-button{
            width:40px;
            height:40px;
            background-color:#000;
            color:#fff;
            border-radius:50%;
            border:none;
            ouline:none;

            cursor:pointer;

            position:fixed;
            left:50px;
            bottom:50px;
            z-index:10;

        }
        .dark-mode-button:active{
            background-color:#444;
            border:none;
            outline:none;
        }
        .dark-mode-button:focus{
            border:none;
            outline:none;
        }
        
        `}</style>
        </>
    )
}

export default DarkModeButton;