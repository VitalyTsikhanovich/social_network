import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type PostsType = {
    id: number
    message: string
    countsLike: number
}

export type PropsArray = {
    posts: Array<PostsType>

    newPostText: string
    // changeUpdateText: (text: string) => void

    addPost:(newPostText: string)=> void;
}
// shouldComponentUpdate(nextProps: Readonly<PropsArray>, nextState: Readonly<{}>, nextContext: any): boolean {
//     return  nextProps != this.props || nextState != this.state
// }

const MyPosts= React.memo((props:PropsArray)=> {

    let postsElement = props.posts.map(p => <Post message={p.message} countsLike={p.countsLike}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    // let onAddPost = () => {
    //     props.addPost()
        // props.dispatch(addPostAC(props.newPostText))


    // }
    let onAddPost = (values: PropsArray ) => {
        props.addPost(values.newPostText)
    }
    // const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //
    //     let text = e.currentTarget.value
    //     props.changeUpdateText(text)
    //     // props.dispatch({type: "CHANGE-NEW-TEXT", newText: value})
    //     // props.dispatch(newTextChangeHandlerAC(value))
    //
    // }
    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>

            {/*<textarea onChange={newTextChangeHandler} value={props.newPostText}/>*/}
            {/*<button onClick={onAddPost}>Add post</button>*/}
            <AddMyPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

let maxLength = maxLengthCreator(6)

const AddNewPostForm: React.FC<InjectedFormProps<PropsArray>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'}
                   validate={[required, maxLength ]}
                   placeholder={'enter post'}>
            </Field>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm<PropsArray>({
    // a unique name for the form   уникальное имя
    form: 'profileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts