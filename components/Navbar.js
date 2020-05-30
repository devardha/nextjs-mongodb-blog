import Link from './Link'
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect, useRef } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import useDarkMode from 'use-dark-mode';


const Navbar = ()=> {

    const [ onSearch, setOnSearch ] = useState(false);
    const darkMode = useDarkMode(false);

    return(
        < >
        <div className="navbar">
            <div className="nav-links">
                <Link activeClassName="active" href="/"><a className="nav-link">Blog</a></Link>
                <Link activeClassName="active" href="/about"><a className="nav-link">About</a></Link>
                <Link activeClassName="active" href="/projects"><a className="nav-link">Projects</a></Link>
                <Link activeClassName="active" href="/gallery"><a className="nav-link">Gallery</a></Link>
                <div className="search">
                    <span className="search-icon" onClick={() => setOnSearch(!onSearch)}><SearchIcon/></span>
                    <span className="darkmode-toggle" onClick={darkMode.toggle}>{darkMode.value ? <BrightnessHighIcon/> : <Brightness2Icon/>}</span>
                </div>
            </div>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Search here..." className="search-input"/>
        </div>

        {
            darkMode.value
            ? <style jsx="true" global="true">{`
            
            body::-webkit-scrollbar {
                background-color: #111 !important;
            }
            .blog-post{
                border-bottom:1px solid #232323 !important;
            }
            .post-body h2::before{
                background-color:#111213;
            }
            .post-body h2{
                color:rgb(255,20,147);
            }
            p span{
                color: #000;
            }
            .footer{
                background-color:#111213 !important;
                border:none !important;
            }
            body{
                background-color:#131415;
                color:#fff;
            }
            .post-title{
                color:#fff
            }
            .search-icon:hover{
                color:rgb(255, 20, 147);
            }
            .search-icon{
                cursor:pointer;
            }
            .search{
                display:flex;
                align-items:center;
                margin-left:auto;
            }
            .searchbar{
                display:flex;
                justify-content:center;
            }
            .search-input{
                height:40px;
                width:60%;
                margin:20px 0;
                display: ${onSearch ? 'block' : 'none'};
                padding: 0 10px;
                border-radius:3px;
                border: none;
                position:relative;
                background-color:#f9f9f9;
            }
            .search-input::placeholder{
                font-size:.9rem;
                font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                font-weight:300;
            }
            .active{
                font-weight:400 !important;
                border-bottom:2px solid rgb(255, 20, 147);
                color:rgb(255, 20, 147);
            }
            .nav-links{
                display:flex;
                width:100%;
                padding:0 10%;
            }
            .nav-link{
                padding: 1rem 1.5rem;
                font-weight: 400;
                font-size: .9rem;
                color:#fff;
            }
            .navbar{
                width:100%;
                background-color:#111213;
            }
            .navbar{
                border-bottom:0px solid #eee;
            }

            `}</style>
            : <style jsx>{`
            
            .search-icon:hover{
                color:rgb(255, 20, 147);
            }
            .search-icon{
                cursor:pointer;
            }
            .search{
                display:flex;
                align-items:center;
                margin-left:auto;
            }
            .searchbar{
                display:flex;
                justify-content:center;
            }
            .search-input{
                height:40px;
                width:60%;
                margin:20px 0;
                display: ${onSearch ? 'block' : 'none'};
                padding: 0 10px;
                border-radius:3px;
                border: none;
                position:relative;
                background-color:#f9f9f9;
            }
            .search-input::placeholder{
                font-size:.9rem;
                font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                font-weight:300;
            }
            .active{
                font-weight:400 !important;
                border-bottom:2px solid rgb(255, 20, 147);
                color:rgb(255, 20, 147);
            }
            .nav-links{
                display:flex;
                width:100%;
                padding:0 10%;
            }
            .nav-link{
                padding: 1rem 1.5rem;
                font-weight: 400;
                font-size: .9rem;
            }
            .navbar{
                width:100%;
            }
            .navbar{
                border-bottom:1px solid #eee;
            }

            `}</style>
        }
        </>
    )
}

export default Navbar;