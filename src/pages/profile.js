import React from 'react';
import style from "../style/profile.module.css"
import exploreStyle from "../style/explore.module.css"
import BackBtn from '../components/backBtn';
import {BsAt, BsUpload, AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram, BsPlus} from "react-icons/all"

function Profile(props) {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`} 
                        style={{justifyContent: "flex-end"}}
                    >
                        <BackBtn to="/home"/>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img 
                    src="/images/user-img.jpg" 
                    alt=""
                    className={style.profileImage}
                />
                <h6>Okoromi Victor</h6>
                <p>@Vicolo</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p> 
                    <p>
                        <span>51</span> following
                    </p> 
                </div>
                <button>Add a bio</button>
                <div className="mb-4">
                    <button className="mb-0">
                        <AiOutlineTwitter />
                    </button>
                    <button className="mb-0">
                        <AiOutlineInstagram />
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/user-img.jpg" alt="" />
                    <div>
                        <p>Joined 7-July-2019</p>
                        <p>Nominated by <span>Austin Coach</span></p>
                    </div>
                </div>
                <p>Member of</p>
                    <button className={style.addMemberBtn}>
                        <BsPlus />
                    </button>
                    
            </div>
            
        </>
    );
}

export default Profile;