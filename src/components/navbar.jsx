import React from 'react';
// Components
import Logo from './logo';
import NavSpacer from './navspacer';
// Icons
import {FaBars, FaTimes, FaUserCircle} from 'react-icons/fa';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        // Bind methods
        this.toggleMenu = this.toggleMenu.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
    }

    toggleMenu(e) {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    }

    renderMenuButton() {
        const {isOpen} = this.state;
        return (
            <button onClick={this.toggleMenu} className="cursor-pointer">
                {isOpen ? <FaTimes/> : <FaBars/>}
            </button>
        );
    }

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <nav
                    className="fixed z-30 flex flex-wrap justify-between items-center w-screen font-mono text-xl md:text-3xl p-4 px-3 md:px-8 dark:text-gray-100  text-gray-900 bg-gray-100 dark:bg-gray-800 shadow-2xl">
                    <Logo className="cursor-default"/>
                    {this.renderMenuButton()}
                </nav>
                <div
                    className="z-20 fixed transition-all duration-500 ease-in-out md:w-1/2  h-screen bg-gray-200 dark:bg-gray-800 p-4"
                    style={{
                        right: isOpen ? '0vw' : `-${window.innerWidth}px`,
                        width: `${window.innerWidth}px`,
                    }}
                >
                    <NavSpacer/>
                    <h1 className="text-gray-400 font-bold text-2xl pt-20 text-center">
                        <i>More content coming soon!</i>
                    </h1>
                    <i>Login...</i>
                </div>
            </>
        );
    }
}

export default Navbar;