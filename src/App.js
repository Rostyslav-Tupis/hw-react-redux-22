import './App.css';
import Form from './Components/Form/form';
import Post from './Components/postList/post';
import { useSelector } from "react-redux";

function App() {
  const postData = useSelector((state) =>state.posts)
  console.log(postData);
  return (
    <div className='container'>
      <Form/>
        {Object.values(postData).map((post , index) => (
          <div className="post-wrapper" key={index}>
              <Post post={post}/>
          </div>
      ))}
    </div>
  );
}

export default App;
