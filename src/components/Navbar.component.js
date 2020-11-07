import m from 'mithril';

const Navbar = {
  view: function (vnode) {
    return m( 'nav',
      {
          id: 'tmSidebar',
          class: 'tm-bg-black-transparent tm-sidebar',
      },
      [
          m(
            'button',
            {
              class: 'navbar-toggler',
              type: 'button',
              'aria-label': 'Toggle navigation'
            }
          ),
          m(
            'div',
            {
              class: 'tm-sidebar-sticky',
            },
            [
              
            ]
          )
      ]
    )
  }
};

export default Navbar;