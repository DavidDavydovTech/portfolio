import m from 'mithril';
import ProjectIcon from './components/ProjectIcon.component';
var root = document.body
var count = 0

// var ProjectIcon = {
//     view: (img) => (
//         <div class="box" style={`background-image: url("${img}")`}/>
//     )
// }

var Hello = {
    view:  function () {
        return m(
            'div', 
            {
                class: 'card-holder'
            }, 
            [
                m(ProjectIcon, {
                    img: './images/minecraft.png',
                    title: 'Will Minecraft ever die?',
                    desc: 'Just when you thought minecraft was gone it comes back stronger...'
                }),
                m(ProjectIcon, {
                    img: './images/smb.jpg',
                    title: 'Super Meat Boy 10 Years Later',
                    desc: 'Does the indie classic hold up?'
                }),
                m(ProjectIcon, {
                    img: './images/uplink.jpg',
                    title: 'Uplink & the Modern Age',
                    desc: 'With the recent attacks on Instagram one can only wonder...'
                }),
                m(ProjectIcon, {
                    img: './images/uplink.jpg',
                    title: 'Will Minecraft ever die?',
                    desc: 'Just when you thought minecraft was gone it comes back stronger...'
                }),
            ]
        )
    }
}

var Splash = {
    view: function() {
        return m(m.route.Link, {
            href: "/hello"
        }, "Enter!")
    }
}

m.route(root, "/projects", {
    "/splash": Splash,
    "/projects": Hello,
})

