import m from 'mithril';

var root = document.body
var count = 0

var Minecraft = {
    view: () => (
        <div class="box" style="background-image: url('./images/minecraft.png')"/>
    )
}

var Hello = {
    view: () => (
        <div>
            <Minecraft/>
        </div>
    )
}

var Splash = {
    view: function() {
        return m(m.route.Link, {
            href: "/hello"
        }, "Enter!")
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})

