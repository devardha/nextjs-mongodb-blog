import Link from './Link'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react'

const Navbar = ()=> {

    const [ onSearch, setOnSearch ] = useState(false);

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
                </div>
            </div>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Search here..." className="search-input"/>
        </div>
        <style global="true">{`
        
        .darkmode-toggle{
            margin-left:20px;
            cursor:pointer;
        }
        .darkmode-toggle:hover{
            color:#037af0;
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
            border-bottom: 2px solid #037af0;
            color: #037af0;
        }
        .nav-links{
            display:flex;
            width:100%;
            padding:0 10%;
        }
        .nav-link{
            padding: 1rem 1.5rem;
            font-weight: 300;
            font-size: .9rem;
        }
        .navbar{
            background-color:#fff;
        }
        .navbar{
            border-bottom:1px solid #eee;
        }
        
        `}</style>
        </>
    )
}

export default Navbar;