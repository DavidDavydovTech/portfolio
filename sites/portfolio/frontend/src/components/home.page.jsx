import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    SiGithub,
    SiLinkedin
} from 'react-icons/si';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [didCall, setDidCall] = useState(false);
    const [retryTime, setRetryTime] = useState(5000);

    useEffect(() => {
        if (projects === null && didCall === false) {
            setDidCall(true);
            axios({
                method: 'get',
                url: 'https://api.dd.tech/projects',

            })
                .then((res) => {
                    setProjects(res.data);
                })
                .catch((err) => {
                    console.warn(err);
                    setTimeout(() => {
                        setDidCall(false);
                        setRetryTime(retryTime * 2);
                    }, retryTime);
                });
        }
    })
    if (projects === null || didCall === false) {
        return <i>Loading...</i>;
    } else if (projects.length === 0) {
        return <i>Projects coming soon!</i>;
    } else {
        return (
            <h1>Wow!</h1>
        );
    }
}

const HomePage = () => (
    <div className="flex justify-center">
        <div className="max-w-screen-2xl">
            <h1 className="col-span-full text-3xl mt-10 font-bold mb-2 text-center">About Me</h1>
            <div className="grid grid-cols-6 gap-6 px-4 md:px-16 xl:px-1/3 py-8 font-mono">
                <div className="col-span-full lg:col-span-4 rounded-lg bg-gray-100 dark:bg-gray-600 shadow-xl p-4 md:p-8">
                    <h2 className="text-2xl mb-6 font-semibold">My Tech Stack</h2>
                    <div className="grid grid-cols-6 gap-1">
                        <b className="col-span-6 md:col-span-1">Languages:</b>
                        <p className="col-span-full md:col-span-5 mt-2 md:mt-0 md:text-left mb-4">
                            JavaScript (ES5/ES6+), Python, Java, Action Script 3, Pascal
                        </p>
                        <b className="col-span-6 md:col-span-1">Frontend:</b>
                        <p className="col-span-full md:col-span-5 mt-2 md:mt-0 md:text-left mb-4">
                            React, Mithril, Bootstrap, Tailwind CSS, HTML5, CSS3, 
                            Pixi.js, Sockets, Redux, Redux Thunk, JQuery, Bablyon.js, 
                            Angular
                        </p>
                        <b className="col-span-6 md:col-span-1">Backend:</b>
                        <p className="col-span-full md:col-span-5 mt-2 md:mt-0 md:text-left mb-4">
                            Node.js, Express.js, Load Balancing, Mongoose, Reverse Proxy,
                            Sequelize, Authentication, MongoDB, MySQL, Schema Design, 
                            GraphQL, Caching, Apache
                        </p>
                        <b className="col-span-6 md:col-span-1">Other:</b>
                        <p className="col-span-full md:col-span-5 mt-2 md:mt-0 md:text-left">
                            Git, Yarn, NPM, Jest, AWS EC2, Git Workflow, Agile Development, 
                            AWS S3, Webpack, Babel, Enzyme, Mocha, Chai, Docker
                        </p>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-2 rounded-lg bg-gray-100 dark:bg-gray-600 shadow-xl p-4 md:p-8">
                    <h2 className="text-2xl mb-3 font-semibold">My Story</h2>
                    <p className="text-left">
                        I am deeply interested in information technology and engineering. 
                        At the age of 12 I started programming in Action Script 3 via 
                        Adobe Flash. Over the years I've learned many programming languages 
                        and frameworks and ultimately fell in love with JavaScript because of 
                        how quickly engineers can go from ideas to finished products. 
                    </p>
                </div>
                <div className="col-span-full rounded-lg bg-gray-100 dark:bg-gray-600 shadow-xl p-4 md:p-8">
                    <h2 className="text-2xl mb-3 font-semibold">Projects</h2>
                    <p className="text-left">
                        {Projects()}
                    </p>
                </div>
                <div className="col-span-full lg:col-span-2 rounded-lg bg-gray-100 dark:bg-gray-600 shadow-xl p-4 md:p-8 text-lg">
                    <h2 className="text-2xl mb-3 font-semibold">Links</h2>
                    <ul>
                        <li>
                            <SiGithub class="inline-block m-2"/> 
                            <a href="https://github.com/DavidDavydovTech">Github</a>
                        </li>
                        <li>
                            <SiLinkedin class="inline-block m-2"/> 
                            <a href="https://www.linkedin.com/in/daviddavydovtech/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-full lg:col-span-4 rounded-lg bg-gray-100 dark:bg-gray-600 shadow-xl p-4 md:p-8">
                    <h2 className="text-2xl mb-3 font-semibold">Education</h2>
                    <div className="mb-3">
                        <span className="flex justify-between mb-2 text-lg">
                            <b>Hack Reactor</b>
                            <i className="text-gray-600 dark:text-gray-400">2020</i>
                        </span>
                        <p className="text-left text-gray-700 dark:text-gray-300 p-0 md:pl-4">
                            Hack Reactor is a Full Stack and Data Science boot camp
                            run by Galvanize Inc. with a heavy focus on getting
                            alumni ready for junior positions by giving them
                            projects using agile/kaban teams, git workflow, industry
                            standard frameworks, and more.
                        </p>
                    </div>
                    <div className="mb-3">
                        <span className="flex justify-between mb-2 text-lg">
                            <b>KBCC</b>
                            <i className="text-gray-600 dark:text-gray-400">2016 - 2017</i>
                        </span>
                        <p className="text-left text-gray-700 dark:text-gray-300 p-0 md:pl-4">
                            Recognized as one of the top 10 community colleges in
                            the United States, Kingsborough Community College is
                            known for its quality, its sea-side campus, and 
                            its alumni which can be found in many major companies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;