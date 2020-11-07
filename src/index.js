import m from 'mithril';
import Navbar from './components/Navbar.component';
var root = document.body

// var ProjectIcon = {
//     view: (img) => (
//         <div class="box" style={`background-image: url("${img}")`}/>
//     )
// }

var Hello = {
    view:  function () {
        return m(
        
        );
    }
}

var Splash = {
    view: function() {
        return m(m.route.Link, {
            href: "/hello"
        }, "Enter!")
    }
}

m.route(root, "/home", {
    "/home": Navbar,
})

