import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadSelectedPost} from "../../redux/posts/reducer";
import style from "./post.module.scss"
import {Skeleton} from "@mui/material";

const Post = () => {
    const dispatch = useDispatch();
    const id = useParams().id;

    const posts = useSelector(state => state.posts);

    const title = posts.selectedPost.title;
    const text = posts.selectedPost.body;
    const loading = posts.postLoad;



    useEffect(() => {
        if (id) {
            dispatch(loadSelectedPost(id));
        }
    }, [id]);



    return (
        <div className={style.post}>
            {loading ?  <Skeleton  variant="rectangular" width={"100%"} height={150} /> :
                <div>
                    <h1>{title}</h1>
                    <div className={style.text}>{text}</div>
                </div>
            }
        </div>
    );
};

export default Post;