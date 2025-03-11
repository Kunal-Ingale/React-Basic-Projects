function Posts({ value, handleIdChange, handleSubmit ,data}) {
    // const [count, setCount] = useState(0);

    
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter ID"
          value={value}
          onChange={handleIdChange}
        />
        <button onClick={handleSubmit}>Submit</button>
        <div>{data?.title}</div>
      </div>
    );
  }
  
  export default Posts;
  

//   <<<< USING  useReducer >>>>
//   import { useEffect, useReducer } from 'react';
// import './App.css';
// import Posts from './Posts.jsx';

// function App() {
//   const initialState = { id: 1, posts: [] };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'SET_ID':
//         return { ...state, id: action.payload };
//       case 'SET_POSTS':
//         return { ...state, posts: action.payload };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           `https://jsonplaceholder.typicode.com/todos/${state.id}`
//         );
//         const data = await response.json();
//         dispatch({ type: 'SET_POSTS', payload: data });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchPosts();
//   }, [state.id]);

//   const handleIdChange = (e) => dispatch({ type: 'SET_ID', payload: e.target.value });

//   return (
//     <>
//       <Posts data={state.posts} handleIdChange={handleIdChange} value={state.id} />
//     </>
//   );
// }

// export default App;

// function Posts({ value, handleIdChange, data }) {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter ID"
//         value={value}
//         onChange={handleIdChange}
//       />
//       <div>{data?.title}</div>
//     </div>
//   );
// }

// export default Posts;
