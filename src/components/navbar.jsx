import React from 'react';
// Components
import Logo from './logo';
// Icons
import { FaBars, FaTimes } from 'react-icons/fa';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isOpen: true,
    };

    // Bind methods
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderMenuButton = this.renderMenuButton.bind(this);
  }

  toggleMenu(e) {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen});
  }

  renderMenuButton() {
    const { isOpen } = this.state;
    if (isOpen) {
      return <FaTimes onClick={this.toggleMenu} className="cursor-pointer pt-1.5"/>;
    }
    return <FaBars onClick={this.toggleMenu} className="cursor-pointer pt-1.5"/>;
  }

  render() {
    return (
      <>
        <nav className="fixed z-30 flex justify-between align-bottom w-screen font-mono p-4 px-8 text-3xl text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-800 shadow-2xl">
          <Logo />
          {this.renderMenuButton()}
        </nav>
        <div>
          
        </div>
      </>
    );
  }
}

export default Navbar;