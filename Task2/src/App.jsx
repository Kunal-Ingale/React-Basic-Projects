import { useEffect, useState } from 'react';
import './App.css';
import Posts from './Posts.jsx';

function App() {
  const [id, setId] = useState(1);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await response.json();
      // console.log(data);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    
    fetchPosts();
  }, []);

  const handleIdChange = (e)=>{
    setId(e.target.value)
  }

  const handleSubmit = ()=>{
    fetchPosts();
  }
  return (
    <>
      <Posts data={posts} handleIdChange={handleIdChange} handleSubmit={handleSubmit} value={id}/>
      <p></p>
    </>
  );
}

export default App;
