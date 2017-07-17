import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import Message from './components/Message'

const checkAllMessages = (newState) => {

}

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar checkAllMsgs={checkAllMessages}/>
        <MessageList checkAllMsgz={checkAllMessages}/>
      </div>
    );
  }
}

export default App;
