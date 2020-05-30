import DashboardLayout from "../../components/dashboard/DashboardLayout"
import Cookies from 'cookies'
import Router from 'next/router';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const DashbaordProjects = ()=> {
    return(
        <DashboardLayout>
            <Head>
                <title>Admin Page - All Projects</title>
            </Head>
            Projects
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

    const respond = await fetch('http://localhost:3000/api/auth/me',{
        headers: {
            'x-access-token': token,
        }
    })

    const { data } = await respond.json();

    return { props: { authenticate: true } }

}

export default DashbaordProjects;