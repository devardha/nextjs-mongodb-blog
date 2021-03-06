import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Link from 'next/link'
import reactHTMLParser from 'react-html-parser'

const HomePost = (props)=> {

    const userIcon = <span className="post-icon"><PersonOutlineIcon style={{ fontSize: '1rem' }}/></span>
    const dateIcon = <span className="post-icon calendar-icon"><DateRangeIcon style={{ fontSize: '1rem' }}/></span>
    const label = props.label;

    const now = new Date(props.date)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = now.getFullYear()
    const month = months[now.getMonth()]
    const date = now.getDate();

    const time = `${month}  ${date}  ${year}`

    const text = props.body;

    return(
        <>
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
                    <Link href={`/blog/[slug]`} as={`/blog/${props.slug}`}><a className="post-title">{props.title}</a></Link>
                    <h3 className="post-detail">{userIcon} By {props.author} {dateIcon} {time}</h3>
                    <div className="details">
                        <p>{text.slice(3, 100)} ...</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`

        p{
            font-size:1rem;
        }
        .post-title{
            cursor: pointer;
            font-size: 1.8rem;
            font-weight: 800;
        }
        .post-title:hover{
            color: rgb(255, 20, 147);
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .post-detail{
            font-size:.8rem;
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
            background: rgb(255, 20, 147);
            color: #fff;
            font-weight: 300;
            font-size: .9rem;
            padding: .5rem;
            border-radius: 5px;
            margin: 0 10px 0 0;
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
            padding-bottom:1.5rem;
            justify-content: center;
            margin-bottom:1.5rem;
        }
        .thumbnail{
            height: 200px;
            width: 35%;
            background-color: #eee;
        }
        .preview{
            width:65%;
            display:flex;
            flex-direction:column;
            align-items: flex-start;
        }
        
        `}</style>
        </>
    )
}

export default HomePost;