const Comment = ()=> {
    return(
        <>
        <div className="comment-section">
            <h3>13 Responses</h3>
            <div className="comment-input">
                <div className="user-image"></div>
                <form>
                    <input type="text" p/>
                    <textarea type="text" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <style jsx>{`
        
        .comment-section h3{
            text-align:left;
        }
        .comment-input{
            margin-top:1.5rem;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
        form textarea[type="text"]{
            height: 100px;
            border: 3px solid #eee;
            display: flex;
            border-radius: 10px;
            width: 100%;
            resize:none;
            padding: 10px 20px;
        }
        form button{
            padding-top: 10px;
            padding-bottom: 10px;
            border: none;
            margin-top: 10px;
        }
        form{
            width: 92%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        .user-image{
            width:50px;
            height:50px;
            background-color:#eee;
            border-radius:50%;
        }
        .comment-section h3{
            font-weight:bold;
        }

        
        `}</style>
        </>
    )
}

export default Comment;