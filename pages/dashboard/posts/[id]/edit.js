import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link'
import NoSSR from 'react-no-ssr';
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Cookies from 'cookies'
import Head from 'next/head'
import CancelIcon from '@material-ui/icons/Cancel';


const Edit = ({postData})=> {


    const [ title, setTitle ] = useState(postData.title);
    const [tags, setTags] = useState(postData.tags);
    const [ img, setImg ] = useState(postData.img);
    const [ content, setContent ] = useState(postData.body);

    const  handleEditorChange = (content, editor) => {
        setContent(content)
    }

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    
        const posts = {
          title: title,
          tags: tags,
          img: img,
          author: postData.username,
          body: content,
          slug: postData.slug
        }

        const postId = postData._id

        axios.put(`http://localhost:3000/api/posts/${postId}`, posts);
    
        Router.push('/dashboard')
    }

    return(
        <div className="editor">
            <Head>
                <title>Admin Page - Create Post</title>
            </Head>  
            <form onSubmit={onSubmit}>
                <div className="createpost-header">
                    <div className="row">
                        <input className="title-input input" type="text" placeholder="Title" onChange={onChangeTitle} value={title} />
                        <div className="createpost-button">
                            <button className="btn">Publish</button>
                            <Link href="/dashboard"><button className="btn cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </form>
            <NoSSR>
                <Editor
                apiKey='xh879tp8alk4yggmhl4kmaba49t4dowcwpdif3wciakn2mqk'
                initialValue={content}
                init={{
                height: 500,
                menubar: 'insert',
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount codesample'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | image | code codesample | removeformat | help'
                }}
                onEditorChange={handleEditorChange}
                />
            </NoSSR>
            <div className="dashboard-content">
            <div className="tags-input">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className='tag-title'>{tag}</span>
                            <span className='tag-close-icon'
                                onClick={() => removeTags(index)}
                            >
                                <CancelIcon  style={{ fontSize: '1rem' }}/>
                            </span>
                        </li>
                    ))}
                </ul>
                <input
                    className="tag-input"
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Press enter to add tags"
                />
            </div>
            <input value={img} className="input img-input" type="text" placeholder="Insert image url here" onChange={(e) => setImg(e.target.value)}/>
            </div>
            <style jsx>{`

            .editor{
                height:calc(100vh - 60px);
            }
            .create-page{
                padding-bottom:40px;
            }
            .cancel-button{
                margin-left:10px;
            }
            .img-input{
                width: 100%;
                margin-top: 10px;
            }
            .input{
                height: 40px;
                padding: 0 10px;
                color: #000;
                border: 1px solid #bbb;
                border-radius: 3px;
            }
            .tags-input {
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                min-height: 48px;
                padding: 0 8px;
                border: 1px solid #bbb;
                border-radius: 3px;
                background: #fff;
                margin-top:20px;
            }
            .tags-input:focus-within {
                border: 1px solid #0052cc;
            }
            .tags-input input {
                flex: 1;
                border: none;
                height: 48px;
                font-size: 14px;
                padding: 0 0 0 10px;
            }
            .tags-input input:focus {
                outline: transparent;
            }

            #tags {
                display: flex;
                flex-wrap: wrap;
                padding: 0;
                margin: 8px 0 0 0;
            }

            .tag {
                width: auto;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #000;
                padding: 0 8px;
                font-size: 14px;
                list-style: none;
                border-radius: 6px;
                margin: 0 8px 8px 0;
                
                background-color:buttonface;
                border-width: 2px;
                border-style: outset;
                border-color: buttonface;
            }
            .dashboard-content{
                padding:10px 15%;
            }
            .tag-title {
                margin-bottom: 2px;
            }
            .tag-close-icon {
                color:#fff;
                margin-top: 5px;
                margin-left: 3px;
                cursor:pointer;
            }
            .createpost-header .row{
                display: flex;
            }
            .createpost-button{
                display:flex;
                margin-left:auto;
                align-items:center;
            }
            .createpost-header{
                display:flex;
                border-bottom: 1px solid #ccc;
                flex-direction:column;
                padding: 10px 5%;
            }
            form{
                display: flex;
                flex-direction: column;
            }
            .title-input{
                width: 80%;
            }
            .input::placeholder{
                font-size:14px;
            }
            p{
                font-size:1rem;
            }
            .preview{
                margin-top: 30px;
                border: 1px solid #bbb;
                min-height:300px;
                border-radius: 2px;
                padding: 10px;
                background: #fff;
            }

            `}</style>
        </div>
    )
}

Edit.getInitialProps = async ( {query: { id }, req, res } )=> {
    const cookie = new Cookies(req);
    const token = cookie.get('_token');

    if(!token){
        if(typeof window === 'undefined'){
            res.writeHead(302, {location: '/login'})
            res.end()
        }
        else{
            Router.push('/login');
        }
    }

    const respond = await fetch(`http://localhost:3000/api/posts/${id}`)

    const { data } = await respond.json();

    return { postData: data }

}

export default Edit;