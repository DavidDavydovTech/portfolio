import m from 'mithril';

// var ProjectIcon = {
//     view: (img) => (
//         <div class='box' style={`background-image: url('${img}')`}/>
//     )
// }

m.render( document.body, 
  m(
    'div',
    {
      id: 'viewport',
    },
    [
      m( 'nav',
        {},
        [
          // m(
          //   'button',
          //   {
          //     class: 'navbar-toggler',
          //     type: 'button',
          //     'aria-label': 'Toggle navigation'
          //   }
          // ),
          m(
            'ul',
            {},
            [
              'nav'
            ]
          ),
        ]
      ),
      m(
        'div',
        {
          id: 'subport'
        },
        null
      )
    ]
  )
);


m.route(document.getElementById('subport'), 
    '/home', 
    {
        '/home': m(
            'div',
            {},
            'HELLO'
        ),
    }
)

