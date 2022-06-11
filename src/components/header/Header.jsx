import React, {useEffect, useState} from 'react';
import style from './header.module.scss'
import {Link} from "react-router-dom";
import {loadPosts, loadSearchPost, loadSelectedPost} from "../../redux/posts/reducer";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    console.log(search)

    // useEffect(() =>{
    //     dispatch(loadSearchPost(search))
    // },[search])

    const onSearch = () =>{
        dispatch(loadSearchPost(search))
    }
    const onMain = () => {
        dispatch(loadPosts())
    }


    return (
        <div className={style.header}>
            <div className={style.wrap}>
                <Link onClick={onMain} className={style.link} to={`/`} >
                    Список
                </Link>
                <div>
                    <input
                        onChange={(event) => setSearch(event.target.value)}
                        className={style.input}
                        type="text"
                        placeholder="Поиск"
                    />
                    <button
                        className={style.btn}
                        onClick={onSearch}
                    >Поиск</button>
                </div>
            </div>
        </div>
    );
};

export default Header;