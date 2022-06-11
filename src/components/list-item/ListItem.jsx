import React from 'react';

import style from './list-item.module.scss'
import {Link} from "react-router-dom";

const ListItem = ({item}) => {
    return (
        <Link to={`/${item.id}`} className={style.listItem}>
            {item.title}
        </Link>
    )
};

export default ListItem;