import DashboardLayout from "../../../components/dashboard/DashboardLayout"
import PostsList from "../../../components/dashboard/PostsList"

export default ({posts})=> {

    const data = posts.data;

    return(
        <DashboardLayout>
            <PostsList data={data}/>
        </DashboardLayout>
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
        props: { posts },
    }
}