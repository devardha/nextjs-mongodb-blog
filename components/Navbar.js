import Link from './Link'
import SearchIcon from '@material-ui/icons/Search';

const Navbar = ()=> {
    return(
        <>
        <div className="navbar">
            <div className="nav-links">
                <Link activeClassName="active" href="/"><a className="nav-link">Blog</a></Link>
                <Link activeClassName="active" href="/about"><a className="nav-link">About</a></Link>
                <Link activeClassName="active" href="/projects"><a className="nav-link">Projects</a></Link>
                <Link activeClassName="active" href="/gallery"><a className="nav-link">Gallery</a></Link>
                <div className="search">
                    <input type="text" name="search" id="search" placeholder="Search"/>
                </div>
            </div>
        </div>
        <style jsx>{`
        
        .search{
            display:flex;
            align-items:center;
            margin-left:auto;
        }
        input{
            height:35px;
            padding: 0 5px;
            border-radius:3px;
            border: 1px solid #eee;
        }
        .active{
            border-bottom: 2px solid #292929;
        }
        .nav-links{
            display:flex;
            width:100%;
            padding:0 5%;
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