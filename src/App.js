import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


  var messages = [
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

  messages.forEach(function(el){
    el['checked'] = false;
  });

  class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    activeCheckAll : false,
    partialCheck: false,
    unreadMsgNum : 0,
    };
  };

  componentDidMount() {
    let unreadMsgCount = 0
    messages.forEach(function(el){
      if(!el['read']){
        unreadMsgCount +=1
      }
    });
    this.setState({unreadMsgNum : unreadMsgCount})
  }

  toggleCheckAll = () => {
    const currentState = this.state.activeCheckAll;
    this.setState({activeCheckAll : !currentState});
    this.setState({partialCheck : false});
    messages.forEach(function(el){
      el['checked'] = !currentState;
    });
  };

  toggleCheck = (id) => {
    let index;
    messages.forEach(function(el,i){
      if(id === el.id){
        index = i;
      }
    });
    messages[index]['checked'] = !messages[index]['checked'];
    let countChecked = 0;
    messages.forEach(function(el){
      if(el['checked']){
        countChecked += 1;
      }
    });
    if(countChecked > 0 && countChecked < messages.length){
      this.setState({activeCheckAll : false})
      this.setState({partialCheck : true});
    } else if (countChecked === messages.length) {
      this.setState({activeCheckAll : true})
      this.setState({partialCheck : false});
    }  else {
      this.setState({activeCheckAll : false});
      this.setState({partialCheck : false});
    }
  };

  toggleStar = (id) => {
    let index;
    messages.forEach(function(el,i){
      if(id === el.id){
        index = i;
      }
    });
    messages[index]['starred'] = !messages[index]['starred'];
    this.setState({messages : messages});
  };

  toggleRead = (id) => {
    let index;
    messages.forEach(function(el,i){
      if(id === el.id){
        index = i;
      }
    });
    messages[index]['read'] = true;
    let unreadMsgCount = 0
    messages.forEach(function(el){
      if(!el['read']){
        unreadMsgCount +=1
      }
    });
    this.setState({unreadMsgNum : unreadMsgCount})
  };

  markRead = () => {
    messages.forEach((el)=>{
      if(el['checked']){
        el['read'] = true;
      }
    });
    this.setState({messages : messages});
    let unreadMsgCount = 0
    messages.forEach(function(el){
      if(!el['read']){
        unreadMsgCount +=1
      }
    });
    this.setState({unreadMsgNum : unreadMsgCount})
  };

  markUnread = () => {
    messages.forEach((el)=>{
      if(el['checked']){
        el['read'] = false;
      }
    });
    this.setState({messages : messages});
    let unreadMsgCount = 0
    messages.forEach(function(el){
      if(!el['read']){
        unreadMsgCount +=1
      }
    });
    this.setState({unreadMsgNum : unreadMsgCount})
  };

  addLabel = (event) => {
    messages.forEach((el)=>{
      if(el['checked'] && !el['labels'].includes(event.target.value)){
        el['labels'].push(event.target.value);
      }
    });
    this.setState({messages : messages});
  }

  removeLabel = (event) => {
    messages.forEach((el)=>{
      if(el['checked'] && el['labels'].includes(event.target.value)){
        el['labels'].splice((el['labels'].indexOf(event.target.value)),1);
      }
    });
    this.setState({messages : messages});
  }

  toggleDelete = () => {
    let newMsgArr = [];
    messages.forEach((el,i)=>{
      if(!el['checked']){
        newMsgArr.push(el);
      }
    });
    messages = newMsgArr;
    this.setState({messages : messages});
  }


  render() {
    return (
      <div>
        <Toolbar toggleCheckAll={this.toggleCheckAll} activeCheckAll={this.state.activeCheckAll} markRead={this.markRead} markUnread={this.markUnread} addLabel={this.addLabel} removeLabel={this.removeLabel} toggleDelete={this.toggleDelete} unreadMsgNum={this.state.unreadMsgNum} partialCheck={this.state.partialCheck}/>
        <MessageList messages={messages} toggleCheck={this.toggleCheck} toggleStar={this.toggleStar} toggleRead={this.toggleRead} />
      </div>
    );
  }
}

export default App;
