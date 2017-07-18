import React from 'react'

class Message extends React.Component {

  constructor(props){
    super(props)
        this.state = {
          activeRead: false,
          activeCheck: false,
          activeStar: false,
        };
  }

  toggleRead = (event) => {
    const currentState = this.state.activeRead;
    this.setState({ activeRead: !currentState });
  };

  toggleCheck = (event) => {
    const currentState = this.state.activeCheck;
    this.setState({ activeCheck: !currentState });
  };

  toggleStar = (event) => {
    const currentState = this.state.activeStar;
    this.setState({ activeStar: !currentState });
  };



  render (){
    return (
      <div className={`row message ${this.state.activeRead ? 'read': 'unread'} ${this.state.activeCheck ? 'selected': null}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onClick={this.toggleCheck} />
            </div>
            <div className="col-xs-2">
              <i className={`fa fa-star-o ${this.state.activeStar ? 'star': null}`} onClick={this.toggleStar}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11" onClick={this.toggleRead}>
        {this.props.message.labels.length > 0 ? (<span className="label label-warning">{this.props.message.labels[0]}</span>):(<div></div>)}
        {this.props.message.labels.length > 1 ? (<span className="label label-warning">{this.props.message.labels[1]}</span>):(<div></div>)}
          <a href="#">
          {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}


export default Message
