import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard'

function App() {

  const [post, setPosts] = useState([])
  const [errors, setErrors] = useState(null)

  const fetchedData = async() => {
    try {
      const data = await fetch('https://dummyjson.com/posts')
    const json = await data.json()
    setPosts(json.posts)
    }
    catch(err){
      setErrors(err)
    }
  }  

  useEffect(() => {
    fetchedData()
  }, [])

  return !post.length ? (
    <h1>No posts found!
      {errors ? <p>{errors}</p> : null}
    </h1>
  ) : (
    post.map(p => 
     <PostCard key={p.id} 
      id= {p.id}
      title={p.title}
      body={p.body}
      likes={p.reactions.likes}
      dislikes={p.reactions.dislikes}
      views={p.views}
     />
    )
  )
}

export default App
