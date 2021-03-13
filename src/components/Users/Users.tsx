import {MapDispatchType, MapStatePropsType} from "./UsersContainer";
import style from "./Users.module.css"

type UsersPropsType = MapStatePropsType & MapDispatchType


function Users(props: UsersPropsType) {
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1, photoUrl: 'https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg',
                followed: true, fullName: 'Иван', status: 'I am hero', location: {sity: 'Mensk', country: 'BY'}
            },
            {
                id: 2, photoUrl: 'https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg',
                followed: false, fullName: 'Марья', status: 'I am hero', location: {sity: 'Kiev', country: 'UA'}
            },
            {
                id: 3, photoUrl: 'https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg',
                followed: true, fullName: 'Петр', status: 'I am hero', location: {sity: 'Mensk', country: 'RB'}
            },
        ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={style.photo}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow</button>}


                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div> {u.status}</div>
                        </span>
                        <span>
                             <div> {u.location.country}</div>
                         <div> {u.location.sity}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users