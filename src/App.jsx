
import React from "react";
import { hot } from 'react-hot-loader/root';
// Components
import Navbar from './components/navbar';
import NavSpacer from './components/navspacer';
import HomePage from './components/home.page';

const App = () => (
  <>
    <Navbar />
    <div className="z-0 fixed w-screen h-screen bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 overflow-y-scroll">
      <NavSpacer />
      <HomePage />
    </div>
  </>
);

export default hot(App);
