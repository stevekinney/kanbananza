import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import './index.scss';
import { UsersProvider } from './components/UsersContext';

ReactDOM.render(
  <UsersProvider>
    <Application />
  </UsersProvider>,
  document.getElementById('root'),
);
