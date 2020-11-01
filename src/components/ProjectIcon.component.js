import m from 'mithril';

const ProjectIcon = {
    view: function (vnode) {
        return(
            m(
                'div', 
                {
                    class: 'box',
                    style: `background-image: url("${vnode.attrs.img}")`,
                },
                m(
                    'div',
                    {
                        class: 'overlay',
                    },
                    [
                        m(
                            'h3',
                            {},
                            vnode.attrs.title
                        ),
                        m(
                            'p',
                            {},
                            vnode.attrs.desc
                        )
                    ]
                )
            )
        );
    },
}

export default ProjectIcon;