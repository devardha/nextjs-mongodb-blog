import Layout from '../components/Layout'
import Post from '../components/Post'
import Head from 'next/head'

import Data from '../static.json'

export default function({posts}){

    const data = Data;

    return(
        <Layout>
            <Head>
                <title>Ardha.dev Official Blog</title>
            </Head>
            <div className="content">
                <div className="post-feed">
                    { data.map((post, index)=>{
                        return(
                            <Post
                            key={index}
                            title={post.title}
                            label={post.tags}
                            body={post.body}
                            author={post.author}
                            date={post.date}
                            img={post.img}/>
                        )
                    }) }
                </div>
            </div>
            <style jsx>{`
            
            .post-feed{
                display:flex;
                flex-direction:column;
                width:100%;
                padding:70px 20% 50px 20%;
                text-align:center;
            }
            
            `}</style>
        </Layout>
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}