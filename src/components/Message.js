import React from 'react'

class Message extends React.Component {

  constructor(props){
    super(props)
  }
  render (){
    return (
      <div className={`row message ${this.props.message.checked? 'selected': null} ${this.props.message.read? 'read': 'unread'}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.message.checked || ''} onClick={()=>{this.props.toggleCheck(this.props.value)}} />
            </div>
            <div className="col-xs-2">
              <i onClick={()=>{this.props.toggleStar(this.props.value)}} className={`fa fa-star-o ${this.props.message.starred? 'star': null}`} ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11" onClick={(event)=>{event.preventDefault();this.props.toggleRead(this.props.value)}}>
        {this.props.message.labels.length > 0 ? (<span className="label label-warning">{this.props.message.labels[0]}</span>):(<div></div>)}
        {this.props.message.labels.length > 1 ? (<span className="label label-warning">{this.props.message.labels[1]}</span>):(<div></div>)}
        {this.props.message.labels.length > 2 ? (<span className="label label-warning">{this.props.message.labels[2]}</span>):(<div></div>)}
          <a href="">
          {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}


export default Message
