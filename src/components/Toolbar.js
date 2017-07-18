import React from 'react'

class Toolbar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      activeCheckAll: false,
  };
  }

  toggleCheckAll = (event) => {
    let currentState = this.state.activeCheckAll;
    this.setState({ activeCheckAll: !currentState });
    let newState = !this.state.activeCheckAll
    this.props.checkAllMsgs(newState);
  };

  render (){

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <input type="checkbox" className="btn btn-default" onClick={this.toggleCheckAll} />
          </button>

          <button className="btn btn-default" disabled="disabled">
            Mark As Read
          </button>

          <button className="btn btn-default" disabled="disabled">
            Mark As Unread
          </button>

          <select className="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled="disabled">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled="disabled">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}


export default Toolbar
