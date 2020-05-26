import Layout from '../components/Layout'
import Post from '../components/Post'
import Head from 'next/head'
import HomePost from '../components/HomePost';

export default function({posts}){

    const data = posts.data;

    return(
        <Layout>
            <Head>
                <title>Ardha.dev Official Blog</title>
            </Head>
            <div className="content">
                <div className="post-feed">
                    { data.map((post, index)=>{
                        return(
                            <HomePost
                            id={post._id}
                            key={index}
                            title={post.title}
                            label={post.tags}
                            body={post.body}
                            author={post.author}
                            date={post.date}
                            img={post.img}
                        />
                        )
                    }) }
                </div>
            </div>
            <style jsx>{`
            
            .post-feed{
                display:flex;
                flex-direction:column;
                width:100%;
                padding: 70px 10% 70px 10%;
            }
            
            `}</style>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()

    return { props: { posts } }
}