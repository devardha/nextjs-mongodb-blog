import { useRouter } from 'next/router'

const BlogPost = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            <p>Post: {slug}</p>
        </div>
    )
}

export default BlogPost;