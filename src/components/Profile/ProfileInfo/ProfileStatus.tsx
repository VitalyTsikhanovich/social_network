import React, {ChangeEvent} from "react";
import Preloader from "../../common/Preloader/ Preloader";
import {setStatus} from "../../../redux/profile-reducer";


class ProfileStatus extends React.Component<any> {
    statusInputRef = React.createRef()
    state = {
        editMode: false,
        // status: 'redddd'
        status: this.props.status

    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status)
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
  }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>

        );
    }
}

export default ProfileStatus