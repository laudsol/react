import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

  constructor(props){
    super(props)
  }

  render (){

    return (
        <div>
          {this.props.messages.map((el,i) => {
            return (
              <Message key={el.id} message={el} value={el.id} toggleCheck={this.props.toggleCheck}
              toggleStar={this.props.toggleStar}
              toggleRead={this.props.toggleRead}/>
            )
          })}
        </div>
    )
  }
}


export default MessageList
