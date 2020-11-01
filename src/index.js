import m from 'mithril';

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

const ProjectIcon = {
    view: function (vnode) {
        return(
            m(
                'div', 
                {
                    class: 'box',
                    style: `background-image: url("${vnode.attrs.img}")`,
                }
            )
        );
    }
}

m.route(root, "/projects", {
    "/splash": Splash,
    "/projects": Hello,
})

