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
            <Message key={el.id} message={el} />
          )
        })}
        </div>
    )
  }
}


export default MessageList
