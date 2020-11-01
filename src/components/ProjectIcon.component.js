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
                            'Will Minecraft ever Die?'
                        ),
                        m(
                            'p',
                            {},
                            'Just when we though it was gone Minecraft\'s popularity surges...'
                        )
                    ]
                )
            )
        );
    },
}

export default ProjectIcon;