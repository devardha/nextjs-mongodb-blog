import Layout from '../../components/Layout'
import Post from '../../components/Post'

const PostPage = ({posts})=> {

    return(
        <>
        <Layout>
        <div className="content">
                <div className="post-feed">
                    <Post
                    title={posts.title}
                    label={posts.tags}
                    body={posts.body}
                    author={posts.author}
                    date={posts.date}
                    slug={posts.slug}
                    img={posts.img}/>
                </div>
            </div>
        </Layout>
        <style jsx>{`
        
        .post-feed{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:70px 20% 50px 20%;
            text-align:center;
        }

        `}</style>
        </>
    )
}

PostPage.getInitialProps = async ( {query: { slug }} )=> {
    const respond = await fetch(`http://localhost:3000/api/posts/blog/${slug}`)
    const { data } = await respond.json();

    return { posts: data }

}

export default PostPage;