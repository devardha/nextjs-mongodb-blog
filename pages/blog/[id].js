import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Layout from '../../components/Layout'
import Post from '../../components/Post'

const PostPage = ({posts})=> {

    const userIcon = <span className="icon"><PersonOutlineIcon style={{ fontSize: '1.4rem' }}/></span>
    const dateIcon = <span className="icon calendar-icon"><DateRangeIcon style={{ fontSize: '1.4rem' }}/></span>
    // const label = props.label;

    return(
        <>
        <Layout>
        <div className="content">
                <div className="post-feed">
                    <Post
                    id={posts._id}
                    title={posts.title}
                    label={posts.tags}
                    body={posts.body}
                    author={posts.author}
                    date={posts.date}
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

PostPage.getInitialProps = async ( {query: { id }, req, res } )=> {
    const respond = await fetch(`http://localhost:3000/api/posts/${id}`)
    console.log(id)

    const { data } = await respond.json();

    return { posts: data }

}

export default PostPage;