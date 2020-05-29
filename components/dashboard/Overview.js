
const Overview = (props)=> {

    const postCount = props.postCount;

    return(
        <>
        <ol className="grid-group">
            <li className="grid-item">
                <div className="card">
                    <h2 className="title">{postCount}</h2>
                    <h5>Posts</h5>
                </div>
                {/* <h2 className="project-title"><a>COV-ID19</a></h2> */}
            </li>
            <li className="grid-item">
                <div className="card">
                    <h2 className="title">4</h2>
                    <h5>Projects</h5>
                </div>
                {/* <h2 className="project-title"><a>FireSpace API</a></h2> */}
            </li>
            <li className="grid-item">
                <div className="card">
                    <h2 className="title">2</h2>
                    <h5>Photos</h5>
                </div>
                {/* <h2 className="project-title"><a>Explore Mars</a></h2> */}
            </li>
            <li className="grid-item">
                <div className="card">
                    <h2 className="title">34</h2>
                    <h5>Comments</h5>
                </div>
                {/* <h2 className="project-title"><a>Good&amp;Tasty</a></h2> */}
            </li>
        </ol>
        <style jsx>{`
        
        .grid-group{
            margin-top:20px;
            display: grid;
            list-style: none;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 36px;
        }
        .grid-item{
            background-color:none;
        }
        .grid-item .card{
            background-color:buttonface;
            border-width: 2px;
            border-style: outset;
            border-color: buttonface;
            min-width:100%;
            height:130px;
            border-radius:5px;
            color:#000;

            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .card .title{
            font-weight:bold;
            font-size:2.3rem;
        }

        `}</style>
        </>
    )
}

export default Overview;