import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'

import CancelIcon from '@material-ui/icons/Cancel';
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";

const Edit = ({postData})=> {

    console.log(postData);

    const [ title, setTitle ] = useState(postData.title);
    const [tags, setTags] = useState(postData.tags);
    const [ img, setImg ] = useState(postData.img);
    const [ value, setValue ] = useState(postData.body);

    // CKEDITOR
    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, DecoupledEditor } = editorRef.current || {}

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react'),
            DecoupledEditor: require('@ckeditor/ckeditor5-build-decoupled-document')
        }
        setEditorLoaded(true)
    }, [])

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const handleOnChange = (e, editor) => {
        const data = editor.getData();
        setValue(data)
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    
        const posts = {
          title: title,
          tags: tags,
          img: img,
          author: 'Ardha Yudhatama',
          body: value,
        }

        const postId = postData._id

        axios.put(`http://localhost:3000/api/posts/${postId}`, posts)
             .then(res => console.log(res.data));
    
        Router.push('/dashboard')
    }

    return(
        <div className="create-page">  
            <DashboardHeader/>
            <form onSubmit={onSubmit} >
                <div className="createpost-header">
                    <div className="row">
                        <input className="title-input input" type="text" placeholder="Title" onChange={onChangeTitle} value={title} />
                        <div className="createpost-button">
                            <button className="btn btn-primary">Save</button>
                            <Link href="/dashboard"><button className="btn btn-primary cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </form>
            { editorLoaded ? <CKEditor onInit={ editor => { console.log( 'Editor is ready to use!', editor );editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element,editor.ui.getEditableElement());} }editor={ DecoupledEditor }onChange={handleOnChange} data={value} /> : <div></div>}
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
                    defaultValue={tags}
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Press enter to add tags"
                />
            </div>
            <input className="input img-input" type="text" placeholder="Insert image url here" onChange={(e) => setImg(e.target.value)}/>
            </div>
            {/* <div className="preview">
                {ReactHTMLParser(value)}
            </div> */}

            <style jsx>{`

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
                color: #fff;
                padding: 0 8px;
                font-size: 14px;
                list-style: none;
                border-radius: 6px;
                margin: 0 8px 8px 0;
                background: #0081ff;
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
            }
            .createpost-header{
                display:flex;
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

Edit.getInitialProps = async ( {query: { id }} )=> {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)
    console.log(id)

    const { data } = await res.json();

    return { postData: data }

}

export default Edit;