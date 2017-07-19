import React from 'react'

class Toolbar extends React.Component {

  // constructor(props){
  //   super(props)
  //
  // }

  render (){

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <input type="checkbox" className="btn btn-default" onClick={this.props.toggleCheckAll} />
          </button>

          <button className="btn btn-default" onClick={this.props.markRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={this.props.markUnread}>
            Mark As Unread
          </button>

          <select className="form-control label-select" onChange={this.props.addLabel}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o" onClick={this.props.toggleDelete}></i>
          </button>
        </div>
      </div>
    )
  }
}


export default Toolbar
