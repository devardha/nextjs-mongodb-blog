import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useRouter } from 'next/router'
import reactHTMLParser from 'react-html-parser'

const Post = (props)=> {

    const userIcon = <span className="post-icon"><PersonOutlineIcon style={{ fontSize: '1.4rem' }}/></span>
    const dateIcon = <span className="post-icon calendar-icon"><DateRangeIcon style={{ fontSize: '1.4rem' }}/></span>
    const label = props.label;

    return(
        <>
        <div className="blog-post">
            <div className="post-header">
                <span className="labels">{label.map((label, index)=>{
                    return(
                        <li key={index}>{label}</li>
                    )
                })}</span>
                <h1 className="post-title">{props.title}</h1>
                <h3 className="author-name">{userIcon} By {props.author} {dateIcon} {props.date}</h3>
            </div>
            <div className="post-body">
                <img src={props.img} alt=""/>
                <div className="post">
                {reactHTMLParser(props.body)}
                </div>
            </div>
        </div>
        <style jsx>{`
        
        .post{
            text-align:justify;
            line-height: 30px;
        }
        .labels{
            display:flex;
            justify-content:center;
            margin-bottom:10px;
        }
        .labels li{
            background: #0081ff;
            color: #fff;
            padding: .5rem;
            border-radius: 5px;
            margin: 0 5px;
        }
        .post-title{
            font-family:"Open Sans",sans-serif;
            font-size:3.5rem;
        }
        .blog-post{
            margin-bottom:70px;
            padding-bottom:70px;
            border-bottom:1px solid #eee;
        }
        img{
            margin-top:5px;
            width:100%;
            margin-bottom:1.25rem;
            border-radius:10px;
        }
        .author-name{
            font-size:1rem;
            font-family: 'Open Sans', sans-serif;
            margin-top:10px;
            color:#999;
            align-items:center;
        }
        .author-name{
            display: flex;
            justify-content: center;
        }
        .post-body{
            margin-top:20px;
        }

        `}</style>
        </>
    )
}

export default Post;