import DashboardLayout from "../../../components/dashboard/DashboardLayout"
import PostsList from "../../../components/dashboard/PostsList"
import Cookies from 'cookies'
import Router from 'next/router';
import Head from 'next/head'

const Post = ({posts})=> {

    const data = posts.data;

    return(
        <div>
        <Head>
            <title>Admin Page - All Post</title>
        </Head>
        <DashboardLayout>
            <PostsList data={data}/>
        </DashboardLayout>
        </div>
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

    const respond = await fetch('http://dev-ardha-blog.now.sh/api/posts')
    const posts = await respond.json()
  

    return { props: { posts, authenticate: true } }

}

export default Post;