
import React from "react";
import { hot } from 'react-hot-loader/root';
// Components
import Logo from './components/logo';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="fixed z-30 w-screen font-mono p-4 pl-8 text-3xl text-gray-100 bg-gray-800 shadow-2xl">
          <Logo/>
        </h1>
        <div className="z-0 fixed w-screen h-screen bg-gray-700">
          hi
        </div>
      </>
    );
  }
}

export default hot(App);
