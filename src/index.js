import m from 'mithril';

var root = document.body
var count = 0

var Hello = {
    view: () => (
        <div>
            <h1 class="title">My First App</h1>
            <button onclick={() => {count += 1}}>{count} clicks</button>
            <div class="box">My first app</div>
        </div>
    )
}

var Splash = {
    view: function() {
        return m("a", {
            href: "/hello"
        }, "Enter!")
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})

