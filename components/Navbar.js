import Link from './Link'

const Navbar = ()=> {
    return(
        <>
        <div className="navbar">
            <div className="nav-links">
                <Link activeClassName="active" href="/"><a className="nav-link">Home</a></Link>
                <Link activeClassName="active" href="/about"><a className="nav-link">About</a></Link>
                <Link activeClassName="active" href="/projects"><a className="nav-link">Projects</a></Link>
                <Link activeClassName="active" href="/gallery"><a className="nav-link">Gallery</a></Link>
            </div>
        </div>
        <style jsx>{`
        
        .active{
            border-bottom: 2px solid #292929;
        }
        .nav-links{
            display:flex;
            width:100%;
            justify-content:center;
        }
        .nav-link{
            padding: 1.5rem 1.5rem;
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