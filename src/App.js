import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


  const messages = [
    {
      "id": 1,
      "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
      "read": false,
      "starred": true,
      "labels": ["dev", "personal"]
    },
    {
      "id": 2,
      "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
      "read": false,
      "starred": false,
      "selected": true,
      "labels": []
    },
    {
      "id": 3,
      "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
      "read": false,
      "starred": true,
      "labels": ["dev"]
    },
    {
      "id": 4,
      "subject": "We need to program the primary TCP hard drive!",
      "read": true,
      "starred": false,
      "selected": true,
      "labels": []
    },
    {
      "id": 5,
      "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
      "read": false,
      "starred": false,
      "labels": ["personal"]
    },
    {
      "id": 6,
      "subject": "We need to back up the wireless GB driver!",
      "read": true,
      "starred": true,
      "labels": []
    },
    {
      "id": 7,
      "subject": "We need to index the mobile PCI bus!",
      "read": true,
      "starred": false,
      "labels": ["dev", "personal"]
    },
    {
      "id": 8,
      "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
      "read": true,
      "starred": true,
      "labels": []
    }
  ];

  class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {
      activeCheck: false,
      activeCheckAll : false,
      };
    };

  toggleCheckAll = () => {
    const currentState = this.state.activeCheckAll;
    this.setState({activeCheckAll : !currentState})
    messages.forEach(function(el){
      el['checked'] = !currentState;
    });
  };

  toggleCheck = (index) => {
    index -= 1;
    const currentState = this.state.activeCheck;
    this.setState({activeCheck : !currentState})
    messages[index]['checked'] = !currentState;
  };

  toggleStar = (index) => {
    index -= 1;
    messages[index]['starred'] = !messages[index]['starred'];
    this.setState({messages : messages});
  };

  toggleRead = (index) => {
    index -= 1;
    messages[index]['read'] = true;
    this.setState({messages : messages});
  };

  markRead = () => {
    messages.forEach((el)=>{
      if(el['checked']){
        el['read'] = true;
      }
    })
    this.setState({messages : messages});
  };

  markUnread = () => {
    messages.forEach((el)=>{
      if(el['checked']){
        el['read'] = false;
      }
    })
    this.setState({messages : messages});
  };

  toggleDelete = () => {
    messages.forEach((el)=>{
      if(el['checked']){
        console.log(el);
      }
    })
    this.setState({messages : messages});
  }

  render() {
    return (
      <div>
        <Toolbar toggleCheckAll={this.toggleCheckAll} markRead={this.markRead} markUnread={this.markUnread} toggleDelete={this.toggleDelete}/>
        <MessageList messages={messages} toggleCheck={this.toggleCheck} toggleStar={this.toggleStar} toggleRead={this.toggleRead} />
      </div>
    );
  }
}

export default App;
