import Layout from "../components/Layout"
import Head from 'next/head'

export default () => {
    return(
        <>
        <Layout>
        <Head>
            <title>Ardha.dev Official Blog - Projects</title>
        </Head>
        <div className="content">
            <ol className="grid-group">
                <li className="grid-item">
                    <div className="image"></div>
                    {/* <h2 className="project-title"><a>COV-ID19</a></h2> */}
                </li>
                <li className="grid-item">
                    <div className="image"></div>
                    {/* <h2 className="project-title"><a>FireSpace API</a></h2> */}
                </li>
                <li className="grid-item">
                    <div className="image"></div>
                    {/* <h2 className="project-title"><a>Explore Mars</a></h2> */}
                </li>
                <li className="grid-item">
                    <div className="image"></div>
                    {/* <h2 className="project-title"><a>Good&amp;Tasty</a></h2> */}
                </li>
            </ol>
        </div>
        <style jsx>{`
        
        .content{
            padding: 70px 10% 50px 10%
        }
        .grid-group{
            display: grid;
            list-style: none;
            grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
            grid-gap: 36px;
        }
        .grid-item{
            background-color:none;
        }
        .grid-item .image{
            padding-bottom:70%;
            background-color:#eee;
            min-width:100%;
            border-radius:5px;
        }
        .project-title{
            font-weight:700;
            font-size:1.3rem;
            text-align:center;
            margin-top:8px;
        }
        
        `}</style>
        </Layout>
        </>
    )
}