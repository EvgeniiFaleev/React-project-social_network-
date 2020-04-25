import React from "react";


export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };


componentDidUpdate(prevProps, prevState, snapshot) {
  if(prevProps.status !== this.props.status){
    this.setState({
      status: this.props.status
    })
  }
}

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActivateEditMode = (e) => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(e.currentTarget.value);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  };

  render() {
    return (
      <div className="">
        {this.state.editMode ? <textarea autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={this.deActivateEditMode}
            value={this.state.status}/> :
          <p onClick={this.activateEditMode}>{this.props.status || "no- status"}</p>}
      </div>
    )
  }
}
