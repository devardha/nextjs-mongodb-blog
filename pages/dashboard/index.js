import Overview from '../../components/dashboard/Overview' 
import PostsList from '../../components/dashboard/PostsList'
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Link from 'next/link'

const Dashboard = ({post})=> {

    const data = post;
    console.log(data);

    return(

        <DashboardLayout>
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

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/posts`);
    const { data } = await res.json();

    return { props: { post: data } }
}

// Dashboard.getInitialProps = async ( {query: { id }} )=> {
//     const res = await fetch(`http://localhost:3000/api/posts`)
//     const { data } = await res.json();

//     return ({ post: data })

// }

export default Dashboard;