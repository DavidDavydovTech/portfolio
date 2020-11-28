import React from 'react';
// Icons
import { RiMoonFoggyFill, RiSunFoggyFill } from 'react-icons/ri'
// Set website to darkmode
document.body.classList.add('dark');

class DarkmodeToggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDark: true,
            isAtBottom: false,
        };
        // Method bindings
        this.toggleColors = this.toggleColors.bind(this);
    }

    toggleColors() {
        const { isDark } = this.state;
        const root = document.body;
        if(isDark) {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
        this.setState({isDark: !isDark});
    }

    render() {
        const { isDark, isAtBottom } = this.state;
        return (
            <div 
                onClick={this.toggleColors} 
                className="fixed z-10 shadow-2xl cursor-pointer transition duration-500 ease transform scale-100 hover:scale-125 bottom-5 md:bottom-10 left-5 md:left-10 bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 rounded-full md:text-3xl"
                style= {{
                    left: isAtBottom ? '-50vw' : '',
                }}
            >
                {
                    isDark
                    ? <RiSunFoggyFill className="m-4"/>
                    : <RiMoonFoggyFill className="m-4"/>
                }
            </div>
        );
    }
};
export default DarkmodeToggler;