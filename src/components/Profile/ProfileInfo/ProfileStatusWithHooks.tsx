import React, {ChangeEvent, useEffect, useState} from "react";


const ProfileStatusWithHooks = (props: any) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
useEffect(()=>{
setStatus(props.status)
}, [props.status])


    let activateEditMode = () => {
        setEditMode(true)
        // setStatus('')
    }

    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status}
                       onChange={onStatusChange} autoFocus={true}
                       onBlur={deActivateEditMode}
                />
            </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks