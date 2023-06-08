import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App/App';
import './styles/global.scss';
import './styles/variables.scss';

const container = document.getElementById(`root`);
const root = createRoot(container);
root.render(<App tab="home" />);
