import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

const firestore = firebase.firestore();



class App extends Component {
  render() {
    return (
      <div className="App">
        <List device="0"></List>
      </div >
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
    firestore.collection('attendance')
      .onSnapshot((snap) => {
        this.showList(snap)
      });
    this.showList = this.showList.bind(this);
  }
  filter() {
    return true;
  }

  renderEntry(doc) {
    return (
      <div className="entry">
      </div>
    )
  }

  showList(snap) {
    snap.filter(this.filter)
      .forEach(this.renderEntry)
      .join('');
  }

  render() {
    return (
      <div className="List">
      </div>
    );
  }
}

export default App;
