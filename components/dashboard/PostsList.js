import Link from 'next/link';
import axios from 'axios'
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Router from 'next/router';

const PostsList = ( props )=> {

    const data = props.data;

    const handleRemove = (e)=>{
        axios.delete(`http://localhost:3000/api/posts/${e}`);
        console.log(`Post with the id of ${e} has been deleted!`);

        Router.push('/dashboard');
    }

    return(
        <>
        <div className="posts-list">
            <div className="posts-list-header">
                <h2 className="dashboard-title">Posts</h2>
                <Link href="/dashboard/posts/create"><button className="btn btn-primary">Create Post</button></Link>
            </div>
            <ul>
                { data.map( (value, i) => {
                    return(
                            <li className="post-item" key={i}>{value.title}
                            {value.tags.map((tag, i) => {
                                return(
                                <span className="tag" key={i}>{tag}</span>
                                )
                            })}
                            <div className="post-icon">
                            <Link href={`/dashboard/posts/${value._id}/edit`}> 
                                <span className="edit-icon icon"><EditIcon style={{ fontSize: '1rem' }}/></span>
                            </Link>
                                <span className="delete-icon icon" onClick={() => handleRemove(value._id)}><DeleteIcon style={{ fontSize: '1rem' }}/></span>
                            <Link href={`/blog/${value.slug}`}> 
                                <span className="view-icon icon"><VisibilityIcon style={{ fontSize: '1rem' }}/></span>
                            </Link>
                            </div>
                            </li>
                    )
                }) }
            </ul>
        </div>
        <style jsx>{`
        
        .icon{
            cursor:pointer;
            color:#aaa;
        }
        .view-icon{
            margin-left:15px;
        }
        .delete-icon{
            margin-left:15px;
        }
        .post-icon{
            margin-left: auto;
            font-size: 1.4rem;
        }
        .btn{
            margin: 0 0 0 auto;
        }
        .posts-list-header{
            display:flex;
            align-items:center;
            margin-bottom:10px;
        }
        .tag{
            background-color:#eee;
            color:#000;
            padding:.4rem;
            font-size:.8rem;
            border-radius:5px;
            margin-left:10px;
        }
        .posts-list{
            margin-top:30px;
        }
        .dashboard-title{
            font-size:1.5rem;
            font-weight:bold;
        }
        .post-item{
            padding: 5px 20px;
            margin-bottom: 10px;
            align-items: center;
            display: flex;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 5px;
        }
        
        `}</style>
        </>
    )
}

export default PostsList;