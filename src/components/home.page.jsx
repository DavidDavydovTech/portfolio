import React from 'react';
import {
    SiGithub,
    SiLinkedin
} from 'react-icons/si';

const HomePage = () => (
    <>
    <h1 className="col-span-full text-3xl mt-10 font-bold mb-2 text-center">About Me</h1>
    <div className="grid grid-cols-6 gap-6 px-4 md:px-16 xl:px-1/3 py-8 font-mono">
        <div className="col-span-full lg:col-span-4 rounded-lg bg-gray-600 shadow-lg p-4 md:p-8">
            <h2 className="text-2xl mb-6 font-semibold">My Tech Stack</h2>
            <div className="grid grid-cols-6 gap-1">
                <b className="col-span-full md:col-span-auto">Frontend:</b>
                <p className="col-span-full md:col-span-5 mt-2 md:mt-0 text-justify md:text-left mb-4">
                    JavaScript, ES6, React, Mithril, Bootstrap, Tailwind CSS,
                    HTML5, CSS3, Pixi.js, Sockets, Redux, Redux Thunk, JQuery, 
                    Bablyon.js, Angular
                </p>
                <b className="col-span-full md:col-span-auto">Backend:</b>
                <p className="col-span-full md:col-span-5 mt-2 md:mt-0 text-justify md:text-left mb-4">
                Node.js, Express.js, Load Balancing, Mongoose, Reverse Proxy,
                Sequalize, Authentication, MongoDB, MySQL, Schema Design, 
                GraphQL, Caching, Apache

                </p>
                <b className="col-span-full md:col-span-auto">Other:</b>
                <p className="col-span-full md:col-span-5 mt-2 md:mt-0 text-justify md:text-left">
                Git, Yarn, NPM, Jest, AWS EC2, Git Workflow, Agile Development, 
                AWS S3, Webpack, Babel, Enzyme, Mocha, Chai, Docker
                </p>
            </div>
        </div>
        <div className="col-span-full lg:col-span-2 rounded-lg bg-gray-600 shadow-lg p-4 md:p-8">
            <h2 className="text-2xl mb-3 font-semibold">My Story</h2>
            <p className="text-left text-justify">
                Deeply interested in technology from the age of 12 
                years old I started out programming in Action Script 
                3 via Adobe Flash. Over the years I've learned many 
                programming languages and frameworks and fell in love
                with JavaScript because of how quickly engineers 
                can go from an idea to a finished product.
            </p>
        </div>
        <div className="col-span-full rounded-lg bg-gray-600 shadow-xl p-4 md:p-8">
            <h2 className="text-2xl mb-3 font-semibold">Projects</h2>
            <p className="text-left">
                Coming soon! 
            </p>
        </div>
        <div className="col-span-full lg:col-span-2 rounded-lg bg-gray-600 shadow-lg p-4 md:p-8 text-lg">
            <h2 className="text-2xl mb-3 font-semibold">Links</h2>
            <ul>
                <li>
                    <SiGithub class="inline-block m-2"/> 
                    <a href="https://www.linkedin.com/in/daviddavydovtech/">Github</a>
                </li>
                <li>
                    <SiLinkedin class="inline-block m-2"/> 
                    <a href="https://github.com/DavidDavydovTech">LinkedIn</a>
                </li>
            </ul>
        </div>
        <div className="col-span-full lg:col-span-4 rounded-lg bg-gray-600 shadow-lg p-4 md:p-8">
            <h2 className="text-2xl mb-3 font-semibold">Education</h2>
            <div className="mb-3">
                <span className="flex justify-between mb-2 text-lg">
                    <b>Hack Reactor</b>
                    <i className="text-gray-400">2020</i>
                </span>
                <p className="text-left text-justify text-gray-300 p-1">
                    Hack Reactor is a Full Stack and Data Science bootcamp
                    run by Galvanized Inc. with a heavy focus on getting
                    alumni ready for junior positions by giving them
                    projects using agile/kaban, git workflow, and industry
                    standard frameworks.
                </p>
            </div>
            <div className="mb-3">
                <span className="flex justify-between mb-2 text-lg">
                    <b>KBCC</b>
                    <i className="text-gray-400">2016 - 2017</i>
                </span>
                <p className="text-left text-justify text-gray-300 p-1">
                    Recognized as one of the top 10 community colleges in
                    the United States, Kingsborough Community College is
                    known for it's quality, it's campus by the sea, and 
                    it's alumni which can be found in many major companies.
                </p>
            </div>
        </div>
    </div>
    </>
);

export default HomePage;