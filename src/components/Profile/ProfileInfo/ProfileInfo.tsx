import s from "./ProfileInfo.module.css"
import React from "react";
import Preloader from "../../common/Preloader/ Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../common/assets/img/userPhoto.png";
type ProfileInfoProps = {
    profile: any
    status: string
    updateStatus: string
}

function ProfileInfo({profile, status, updateStatus}: ProfileInfoProps) {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.cont}>
                <img src={profile.photos.large || userPhoto} alt={'user photo'}/>
            </div>

            <div>
                <p>Имя: {profile.fullName}</p>
            </div>
            <div>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <p>{profile.contacts.vk}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo