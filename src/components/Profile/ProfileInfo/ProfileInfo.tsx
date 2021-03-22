import s from "./ProfileInfo.module.css"
import React from "react";
import Preloader from "../../common/Preloader/ Preloader";
import liga from '../../common/assets/img/photo_2021-03-22_16-31-25.jpg'

type ProfileInfoProps={
    profile: any
}

function ProfileInfo(props: ProfileInfoProps) {
if (!props.profile){
    return <Preloader/>
}
    return (
        <div >
            <div className={s.discrip}>
                <img src={liga}
                    alt=""/>
            </div>

            <div className={s.cont}>
                <img  src={props.profile.photos.large} alt={'red'}/>
                </div>

                <div>
                    <p>{props.profile.userId}</p>
                    <p>Имя: {props.profile.fullName}</p>
                </div>
            <div>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <p>{props.profile.contacts.vk}</p>
            </div>
                main content
            </div>

    )
}

export default ProfileInfo