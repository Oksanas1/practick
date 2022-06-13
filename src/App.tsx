import React from 'react';
import './App.scss';
import { ModalProvaider } from './context';
//import MessageList from './components/ListMessage/ListMessage';
import Main from './components';

function App() {
  return (
    <ModalProvaider>
      <div className="App">
        <Main />
      </div>
    </ModalProvaider>
  );
}

export default App;
