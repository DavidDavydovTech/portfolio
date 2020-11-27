
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="fixed z-30 w-screen font-mono p-4 pl-8 text-3xl text-gray-100 bg-gray-800 shadow-2xl">
          <a>
            David Davydov
            <a className="text-base text-gray-200 font-600">
              <a className="text-green-400 font-black"> .</a>
              tech
              <a className="text-gray-700">nology</a>
            </a>
          </a>
        </h1>
        <div className="z-0 fixed w-screen h-screen bg-gray-700">
          hi
        </div>
      </>
    );
  }
}

export default hot(App);
