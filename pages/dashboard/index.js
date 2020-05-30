import Overview from '../../components/dashboard/Overview' 
import PostsList from '../../components/dashboard/PostsList'
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Link from 'next/link'
import Cookies from 'cookies'
import Router from 'next/router';
import Head from 'next/head'

const Dashboard = ({post})=> {

    const data = post;

    return(

        <DashboardLayout>
            <Head>
                <title>Admin Page - Dashboard</title>
            </Head>
            <Link href="/"><button className="btn btn-primary">Visit Blog</button></Link>
            <div className="overview">
                <Overview postCount={data.length}/>
            </div>
            <PostsList data={data}/>

            <style jsx>{`
            
            .greeting{
                font-weight:bold;
            }

            `}</style>
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

    const respond = await fetch(`http://localhost:3000/api/posts`);
    const { data } = await respond.json();

    return { props: { post: data } }

}

export default Dashboard;