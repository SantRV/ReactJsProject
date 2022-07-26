import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

const App = () => (
    <div>
        <h1>Hello World Santi is great</h1>
    </div>
);

// Hot is to auto refresh upon save
export default hot(module)(App);