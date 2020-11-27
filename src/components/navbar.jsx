import React from 'react';
// Components
import Logo from './logo';
// Icons
import { FaBars } from 'react-icons/fa';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isOpen: false,
    };
  }

  render() {
    return (
      <nav className="fixed z-30 w-screen font-mono p-4 pl-8 text-3xl text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-800 shadow-2xl">
        <h1><Logo /></h1>
        <FaBars />
      </nav>
    );
  }
}

export default Navbar;