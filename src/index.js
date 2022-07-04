import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

socket.on("selectionPriceUpdate", data => console.log('selectionPriceUpdate', data));
socket.on("SelectionStateUpdate", data => console.log('selectionStateUpdate', data));
socket.on("eventStateUpdate", data => console.log('eventStateUpdate', data));

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
