import m from 'mithril';
// var ProjectIcon = {
//     view: (img) => (
//         <div class='box' style={`background-image: url('${img}')`}/>
//     )
// }
var root = document.body;

var App = {
  view: () => (
    <>
      <nav>
        <ul>
          <li>
            Home Page
          </li>
          <li>
            About Me
          </li>
          <li>
            Projects
          </li>
          <li>
            Blog
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
      <div id='content'>
        An unknown error occured
      </div>
    </>
  )
};
m.mount(root, App);

const Home = {
  view: () => (
    <div>
      Hello!!!
      <button>
        Click me!
      </button>
    </div>
  )
};

// Make routes use no prefix
m.route.prefix = '';
// Get the content element
let contentDiv = document.getElementById('content');
// Set up routes
m.route(contentDiv, 
    '/home', 
    {
        '/home': Home,
    }
);

