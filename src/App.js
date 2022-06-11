import {useEffect} from "react";
import {loadPosts} from "./redux/posts/reducer";
import {useDispatch} from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import PostList from "./components/post-list/PostList";
import Post from "./components/post/Post";


function App() {




  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={<PostList/>} />
        <Route path={"/:id"} element={<Post />} />
      </Routes>

    </div>
  );
}

export default App;
