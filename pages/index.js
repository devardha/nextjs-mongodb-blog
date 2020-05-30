import Layout from '../components/Layout'
import Post from '../components/Post'
import Head from 'next/head'
import HomePost from '../components/HomePost';
import { useState, useEffect } from 'react'

export default function({posts}){

    const data = posts.data;

    return(
        <Layout>
            <Head>
                <title>devArdha Official Blog</title>
            </Head>
            <div className="content">
                <div className="post-feed">
                    { data.slice(0).reverse().map((post, index)=>{
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
                            slug={post.slug}
                        />
                        )
                    }) }
                </div>
            </div>
            <style jsx global>{`

            .post-feed{
                display:flex;
                flex-direction:column;
                width:100%;
                padding: 70px 20% 70px 20%;
            }
            
            `}</style>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dev-ardha-blog.now.sh/api/posts')
    const posts = await res.json()

    return { props: { posts } }
}