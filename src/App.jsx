
import React from "react";
import { hot } from 'react-hot-loader/root';
// Components
import Navbar from './components/navbar';

const App = () => (
  <>
    <Navbar />
    <div className="z-0 fixed w-screen h-screen bg-gray-300 dark:bg-gray-700">
      hi
    </div>
  </>
);

export default hot(App);