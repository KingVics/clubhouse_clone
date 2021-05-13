import React from 'react';
import {Link} from "react-router-dom"
import {IoChevronBack} from "react-icons/all"
import style from '../style/explore.module.css';

function SubHeader({pageTitle}) {
    return (
        <div className={style.head}>
            <Link to="/home">
                <IoChevronBack />
            </Link>
            <h3>{pageTitle}</h3>
        </div>
    );
}

export default SubHeader;