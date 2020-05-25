import DashboardLayout from "../../components/dashboard/DashboardLayout"
import Cookies from 'cookies'
import Router from 'next/router';
import Head from 'next/head'

const Gallery = () => {
    return(
        <DashboardLayout>
            <Head>
                <title>Admin Page - Gallery</title>
            </Head>
            Gallery
        </DashboardLayout>
    )
}

export async function getServerSideProps({req, res}) {
    const cookie = new Cookies(req);
    const token = cookie.get('_token');

    if(!token){
        if(typeof window === 'undefined'){
            res.writeHead(302, {location: '/login'})
            res.end()
        }
        else{
            Router.push('/login');
        }
    }

    return { props: { authenticate: true } }

}

export default Gallery;