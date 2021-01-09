import s from './Post.module.css'
import React from "react";
 type PostPropsType ={
     message: string,
     countsLike: number
}
function Post (props: PostPropsType){

    return(
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-mpic/1927699/img_id1320871121397965407.jpeg/orig" alt=""/>
            {props.message}
            <div>
                <span>like{props.countsLike}</span>
            </div>
        </div>
    )
}

export default Post