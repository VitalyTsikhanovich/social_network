import React, {ChangeEvent} from "react";
import {addPostAC,  newTextChangeHandlerAC, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";



// export type PostsType = {
//     id: number
//     message: string
//     countsLike: number
// }

export type PropsArrayContainer = {
    // posts: Array<PostsType>
    // addPost: () => void
    // changeUpdateText: (value: string) => void
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    // store: StoreType
    // state: RootStateProps
}


// function MyPostsContainer(props: PropsArrayContainer) {
//
//     return (
// <StoreContext.Consumer>
//     {store =>{
//         let postsElement = store.getState().profilePage.posts.map(p => <Post message={p.message} countsLike={p.countsLike}/>)
//         // let newPostElement = React.createRef<HTMLTextAreaElement>()
//
//         let addPost = () => {
//             store.dispatch(addPostAC(store.getState().profilePage.newPostText))
//             // props.addPost()
//         }
//
//         let newTextChangeHandler = (text: string) => {
//             store.dispatch(newTextChangeHandlerAC(text))
//             // props.changeUpdateText(value)
//             // props.dispatch({type: "CHANGE-NEW-TEXT", newText: value})
//         }
//         return  <MyPosts posts={store.getState().profilePage.posts}
//                          addPost={addPost}
//                          newPostText={store.getState().profilePage.newPostText}
//                          changeUpdateText={newTextChangeHandler}/>
//     }
//
//     }
//
// </StoreContext.Consumer>
//
//     )
// }

type  MapStatePropsType={
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchType= {
    addPost: ()=>void
    changeUpdateText: (text: string) =>void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        addPost:()=> {
            dispatch(addPostAC())
        },
        changeUpdateText: (text)=>{
            dispatch(newTextChangeHandlerAC(text))
        }
    }
}

export let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer