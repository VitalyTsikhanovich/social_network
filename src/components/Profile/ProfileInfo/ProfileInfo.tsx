import s from "./ProfileInfo.module.css"
import React from "react";
import Preloader from "../../common/Preloader/ Preloader";
import league from '../../common/assets/img/photo_2021-03-22_16-31-25.jpg'
import ProfileStatus from './ProfileStatus'
type ProfileInfoProps={
    profile: any
    status: string
    updateStatus: string
}

function ProfileInfo(props: ProfileInfoProps) {
if (!props.profile){
    return <Preloader/>
}
    return (
        <div >
            {/*<div className={s.discrip}>*/}
            {/*    <img src={league}*/}
            {/*        alt=""/>*/}
            {/*</div>*/}

            <div className={s.cont}>
                <img  src={props.profile.photos.large} alt={'user photo'}/>
                </div>

                <div>
                    {/*<p>{props.profile.userId}</p>*/}
                    <p>Имя: {props.profile.fullName}</p>
                </div>
            <div>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <p>{props.profile.contacts.vk}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            {/*<div>*/}
            {/*    main content*/}
            {/*</div>*/}
        </div>
    )
}

export default ProfileInfo