import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import DarkModeButton from './DarkModeButton'

const Layout = (props)=> {
    return(
        <div>
            <Header/>
            <Navbar/>
            {props.children}
            {/* <DarkModeButton/> */}
            <Footer/>
        </div>
    )
}

export default Layout