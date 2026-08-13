import { useState, useEffect} from 'react'
import axios from "axios"

const Feed = () => {
    const [post, setPosts] = useState([
        {
            _id: 1,
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
            caption: 'This is a sample caption for the post.'
        }
    ])

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data.posts);
        })
    },[])

  return (
    <section className='feed-section'>
        {
            post.length > 0 ? (
                post.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p> 
            )
        }
    </section>
  )
}

export default Feed