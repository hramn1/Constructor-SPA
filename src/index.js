import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App/app';
import  "./styles/global.scss";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
