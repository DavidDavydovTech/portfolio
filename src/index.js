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
            {}, 
            [
                m(ProjectIcon, {img: './images/minecraft.png'}),
                m(ProjectIcon, {img: './images/smb.jpg'}),
                m(ProjectIcon, {img: './images/uplink.jpg'}),
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

