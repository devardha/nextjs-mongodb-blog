import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props)=> {
    return(
        <div>

            <Navbar/>
            {props.children}
            {/* <DarkModeButton/> */}
            <Footer/>
        </div>
    )
}

export default Layout