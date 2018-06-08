import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';


const title = "My new react project from scarcth "

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();