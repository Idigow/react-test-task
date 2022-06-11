import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "./post-list.module.scss"
import ListItem from "../list-item/ListItem";
import {Pagination, Skeleton, Stack} from "@mui/material";
import {loadPosts} from "../../redux/posts/reducer";

const PostList = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const posts = state.posts.posts;
    const total = state.posts.total;
    const loading = state.posts.listLoad;
    console.log(loading)

    const [page, setPages] = useState(1)

    const pages = Math.ceil( total / 10);

    useEffect(()=>{
        const skip = ((page - 1) * 10);
        dispatch(loadPosts(skip))
    },[page])

    const skelet = [1,2,3,4,5,6,7,8,9,10]


    return (
        <div className={style.wrap}>
            {loading ?
                    <Stack spacing={1}>
                        {skelet.map(item => {
                            return (
                                <Skeleton  variant="rectangular" width={"100%"} height={55} />
                            )
                        })}
                    </Stack>
                :
                <div>
                    {posts.map(item => {
                        return (
                            <ListItem key={item.id} item={item}/>
                        )
                    })}
                </div>
            }


            <Pagination
                onChange={(event, page) => setPages(page)}
                count={pages}
                variant="outlined"
                shape="rounded"
            />
        </div>
    );
};

export default PostList;