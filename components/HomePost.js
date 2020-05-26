import Head from 'next/head'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Link from 'next/link'

const HomePost = (props)=> {

    const userIcon = <span className="post-icon"><PersonOutlineIcon style={{ fontSize: '1.2rem' }}/></span>
    const dateIcon = <span className="post-icon calendar-icon"><DateRangeIcon style={{ fontSize: '1.2rem' }}/></span>
    const label = props.label;

    return(
        <>
        <Head>
            <title>Ardha.dev Official Blog - Projects</title>
        </Head>
        <div className="content">
            <div className="post-item">
                <div className="thumbnail">
                    <img src={props.img} alt=""/>
                </div>
                <div className="preview">
                    <span className="labels">{label.map((label, index)=>{
                        return(
                            <li key={index}>{label}</li>
                        )
                    })}</span>
                    <Link href={`/blog/${props.id}`}><a className="post-title">{props.title}</a></Link>
                    <h3 className="post-detail">{userIcon} By {props.author} {dateIcon} {props.date}</h3>
                    <div className="details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam natus ullam ipsa nemo odio dolores incidunt? Nobis quaerat reiciendis sint temporibus minus delectus iure cupiditate nemo impedit, ipsam aut perferendis.</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`

        .post-title{
            cursor:pointer;
            font-size:2.5rem;
            font-weight:800;
        }
        .post-title:hover{
            color:#0081ff;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .post-detail{
            font-size:.9rem;
            font-family: 'Open Sans', sans-serif;
            margin-top:10px;
            color:#999;
            align-items:center;
            display: flex;
            margin-bottom:5px;
        }
        .labels{
            display:flex;
            margin-bottom:10px;
        }
        .labels li{
            background: #0081ff;
            color: #fff;
            padding: .5rem;
            border-radius: 5px;
            margin: 0 5px;
        }
        p{
            text-align:justify;
            line-height: 30px;
        }
        .thumbnail{
            margin-right:30px;
        }
        h1{
            font-family:"Open Sans",sans-serif;
            font-size:2.5rem;
            font-weight:800;
        }
        .post-item{
            display: flex;
        }
        .thumbnail{
            height:240px;
            width:30%;
            background-color:#eee;
        }
        .preview{
            width:70%;
            display:flex;
            flex-direction:column;
        }
        
        `}</style>
        </>
    )
}

export default HomePost;