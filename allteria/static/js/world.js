
// @author theom / https://www.axonehf.com

allteria.world = function world()
{
    this.components = [];
}

allteria.world.prototype.start = function start()
{
    this.perspective = false;
    this.fps = 20;
    this.ms_per_frame = 1000 / this.fps;
    this.create_renderer();
    this.create_scene();
    this.create_camera();
    this.create_lights();
    this.init_window_resize();
    this.init_picking();
    this.init_keyboard();
    //this.connect_to_server()
    this.create_world();
    this.render();
}

allteria.world.prototype.create_renderer = function create_renderer()
{
    // Create and configure the renderer
    var options = {
        antialias: true
    };
    
    if (Detector.webgl)
    {
        this.renderer = new three.WebGLRenderer(options);
    }
    else
    {
        this.renderer = new three.CanvasRenderer(options);
    }
    
    this.canvas = document.getElementById("canvas1");
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0xffffff, 1.0);
    this.canvas.appendChild(this.renderer.domElement);
}

allteria.world.prototype.create_scene = function create_scene()
{
    this.scene = new three.Scene();
}

allteria.world.prototype.create_camera = function create_camera()
{
    var w = this.canvas.clientWidth;
    var h = this.canvas.clientHeight;
    var view_angle = 75;
    var aspect_ratio = w / h;
    var far_plane = 2000;

    // Create and configure the camera
    if (this.perspective)
    {
        var near_plane = 0.1;
        this.camera = new three.PerspectiveCamera(view_angle, aspect_ratio, near_plane, far_plane);
        this.camera.position.z = 350;
    }
    else
    {
        var near_plane = -100;
        this.camera = new three.OrthographicCamera(-w/2, w/2, h/2, -h/2, near_plane, far_plane);
        this.camera.position.z = 200;
    }
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);
}

allteria.world.prototype.create_lights = function create_lights()
{
    var light;

    light = new three.AmbientLight(0xffffff);
    this.scene.add(light);

    light = new three.DirectionalLight(0xffffff);
    light.intensity = 1.0;
    light.position.set(300, 300, 300).normalize;
    this.scene.add(light);

    light = new three.HemisphereLight(0xffffff, 0xffffff, 0.3);
    this.scene.add(light);
}

allteria.world.prototype.init_window_resize = function init_window_resize()
{
    //threex.WindowResize(this.renderer, this.camera);
    var self = this;
    window.addEventListener("resize", function(event) { self.on_window_resize.call(self, event); }, false);
}

allteria.world.prototype.init_picking = function init_picking()
{
    this.projector = new three.Projector();
    this.mouse = new three.Vector3();

    var self = this;
    window.addEventListener("mousemove", function(event) { self.on_mouse_move(event); }, false);
    window.addEventListener("mousedown", function(event) { self.on_mouse_down(event); }, false);
}

allteria.world.prototype.init_keyboard = function init_keyboard()
{
    var self = this;
    window.addEventListener("keypress",  function(event) { self.on_key_press(event); }, false);
    window.addEventListener("keydown",   function(event) { self.on_key_down(event); }, false);
    window.addEventListener("keyup",     function(event) { self.on_key_up(event); }, false);
}

allteria.world.prototype.connect_to_server = function connect_to_server()
{
    var self = this;
    try
    {
        this.socket = new allteria.socket("ws://" + location.host + "/ws");
        this.socket.onopen    = function()      { self.on_socket_open(); }
        this.socket.onmessage = function(event) { self.on_socket_message(event); }
        this.socket.onclose   = function()      { self.on_socket_close(); }
        this.socket.onerror   = function(error) { self.on_socket_error(error); }
    }
    catch (e)
    {
        if (this.debug)
        {
            console.debug("allteria.world", "connect_to_server");
        }
    }
}

allteria.world.prototype.on_socket_open = function on_socket_open()
{
    console.log("socket connected");
}

allteria.world.prototype.on_socket_message = function on_socket_message(event)
{
    console.log("socket message: '" + event.data + "'");
    this.parse_message(event.data);
}

allteria.world.prototype.on_socket_close = function on_socket_close()
{
    console.log("socket closed");
}

allteria.world.prototype.on_socket_error = function on_socket_error(error)
{
    console.log("socket error: '" + error + "'");
}

allteria.world.prototype.parse_message = function parse_message(msg)
{
    var words = msg.split(" ");
    for (var i = 0; i < words.length; i++)
    {
        var word = words[i];
        switch (word)
        {
            case "identify": this.identify(); break;
        }
    }
}

allteria.world.prototype.send = function send(msg)
{
    this.socket.send(msg);
}

allteria.world.prototype.on_window_resize = function on_window_resize(event)
{
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    if (this.perspective)
    {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    }
    else
    {
        var w2 = this.canvas.clientWidth / 2;
        var h2 = this.canvas.clientHeight / 2;
        this.camera.left = -w2;
        this.camera.right = w2;
        this.camera.top = h2;
        this.camera.botto = -h2;
    }
    this.camera.updateProjectionMatrix();
    console.log(this.canvas.clientWidth);
}

allteria.world.prototype.on_mouse_move = function on_mouse_move(event)
{
    // Normalize the mouse coordinates to [-1, 1]
    this.mouse.x =  2 * (event.clientX / this.canvas.clientWidth) - 1;
    this.mouse.y = -2 * (event.clientY / this.canvas.clientHeight) + 1;

    // Shoot out a picking ray and get back the objects the ray intersected
    var raycaster = this.projector.pickingRay(this.mouse.clone(), this.camera);
    var intersects = raycaster.intersectObjects(this.scene.children, true);

    // Check if some object was picked
    if (intersects.length > 0)
    {
        for (var i = 0; i < intersects.length; i++)
        {
            // The closest object is the first in the array
            var object = intersects[i];
            var new_component = object.object.comp;
            if (new_component === undefined)
            {
                continue;
            }
            if (new_component.is_visible)
            {
                if (!new_component.is_visible())
                {
                    continue;
                }
            }

            event.object = object;
            this.picked_object = object;
            this.focused_object = this.picked_object;
            
            if (this.picked_component === undefined)
            {
                this.picked_component = new_component;
                this.focused_component = this.picked_component;
                if (this.picked_component.on_mouse_enter)
                {
                    this.picked_component.on_mouse_enter.call(this.picked_component, event);
                }
            }
            
            if (this.picked_component != new_component)
            {
                if (this.picked_component.on_mouse_leave)
                {
                    this.picked_component.on_mouse_leave.call(this.picked_component, event);
                }
                this.picked_component = new_component;
                this.focused_component = this.picked_component;
                if (this.picked_component.on_mouse_enter)
                {
                    this.picked_component.on_mouse_enter.call(this.picked_component, event);
                }
            }
            
            if (this.picked_component.on_mouse_over)
            {
                this.picked_component.on_mouse_over.call(this.picked_component, event);
            }
        }
    }
    else
    {
        if (this.picked_component)
        {
            if (this.picked_component.on_mouse_leave)
            {
                this.picked_component.on_mouse_leave.call(this.picked_component, event);
            }
        }
        this.picked_component = undefined;
    }
}

allteria.world.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (this.picked_component !== undefined)
    {
        if (this.picked_component.on_mouse_down)
        {
            event.object = this.picked_object;
            this.picked_component.on_mouse_down.call(this.picked_component, event);
        }
    }
}

allteria.world.prototype.on_key_press = function on_key_press(event)
{
    if (this.focused_component)
    {
        if (this.focused_component.on_key_press)
        {
            event.object = this.focused_object;
            this.focused_component.on_key_press.call(this.focused_component, event);
        }
    }
}

allteria.world.prototype.on_key_down = function on_key_down(event)
{
    if (this.focused_component)
    {
        if (this.focused_component.on_key_down)
        {
            event.object = this.focused_object;
            this.focused_component.on_key_down.call(this.focused_component, event);
        }
    }
}

allteria.world.prototype.on_key_up = function on_key_up(event)
{
    if (this.focused_component)
    {
        if (this.focused_component.on_key_up)
        {
            event.object = this.focused_object;
            this.focused_component.on_key_up.call(this.focused_component, event);
        }
    }
}
   

allteria.world.prototype.register = function register(comp)
{
    this.components.push(comp);
}

allteria.world.prototype.add_letter = function add_letter(letter, pos, scale)
{
    scale = scale || 4.5;
    var spacing = 0.8;
    letter = new allteria.letter(letter);
    letter.set_scale(scale);
    pos.x += letter.half_width * 2 + scale * spacing;
    var temp = pos.y;
    pos.y -= letter.base;
    letter.position.set(pos.x, pos.y, pos.z);
    pos.y = temp;
    this.scene.add(letter);
}

allteria.world.prototype.create_world = function create_scene()
{
    var letter;

    var pos = new three.Vector3(-940, 500, 0);

    this.add_letter("A", pos);
    this.add_letter("Á", pos);
    this.add_letter("B", pos);
    this.add_letter("C", pos);
    this.add_letter("D", pos);
    this.add_letter("Ð", pos);
    this.add_letter("E", pos);
    this.add_letter("É", pos);
    this.add_letter("F", pos);
    this.add_letter("G", pos);
    this.add_letter("H", pos);
    this.add_letter("I", pos);
    this.add_letter("Í", pos);
    this.add_letter("J", pos);
    this.add_letter("K", pos);
    this.add_letter("L", pos);
    this.add_letter("M", pos);
    this.add_letter("N", pos);
    this.add_letter("O", pos);
    this.add_letter("Ó", pos);
    this.add_letter("P", pos);
    this.add_letter("Q", pos);
    this.add_letter("R", pos);
    this.add_letter("S", pos);
    this.add_letter("T", pos);
    this.add_letter("U", pos);
    this.add_letter("Ú", pos);
    this.add_letter("V", pos);
    this.add_letter("X", pos);
    this.add_letter("Y", pos);
    this.add_letter("Ý", pos);
    this.add_letter("Z", pos);
    this.add_letter("Þ", pos);
    this.add_letter("Æ", pos);
    this.add_letter("Ö", pos);
    this.add_letter("a", pos);
    this.add_letter("á", pos);
    this.add_letter("b", pos);
    this.add_letter("c", pos);
    this.add_letter("d", pos);
    this.add_letter("ð", pos);
    this.add_letter("e", pos);
    this.add_letter("é", pos);
    this.add_letter("f", pos);
    this.add_letter("g", pos);
    this.add_letter("h", pos);
    this.add_letter("i", pos);
    this.add_letter("í", pos);
    this.add_letter("j", pos);
    this.add_letter("k", pos);
    this.add_letter("l", pos);
    this.add_letter("m", pos);
    this.add_letter("n", pos);
    this.add_letter("o", pos);
    this.add_letter("ó", pos);
    this.add_letter("p", pos);
    this.add_letter("q", pos);
    this.add_letter("r", pos);
    this.add_letter("s", pos);
    this.add_letter("t", pos);
    this.add_letter("u", pos);
    this.add_letter("ú", pos);
    this.add_letter("v", pos);
    this.add_letter("x", pos);
    this.add_letter("y", pos);
    this.add_letter("ý", pos);
    this.add_letter("z", pos);
    this.add_letter("þ", pos);
    this.add_letter("æ", pos);
    this.add_letter("ö", pos);
    this.add_letter("w", pos);
    this.add_letter("0", pos);
    this.add_letter("1", pos);
    this.add_letter("2", pos);
    this.add_letter("3", pos);
    this.add_letter("4", pos);
    this.add_letter("5", pos);
    this.add_letter("6", pos);
    this.add_letter("7", pos);
    this.add_letter("8", pos);
    this.add_letter("9", pos);
    this.add_letter(":", pos);
    this.add_letter(",", pos);
    this.add_letter(".", pos);
    this.add_letter("?", pos);
    this.add_letter("@", pos);
    this.add_letter("+", pos);
    this.add_letter("-", pos);
    this.add_letter("*", pos);
    this.add_letter("/", pos);
    this.add_letter("!", pos);
    this.add_letter("'", pos);
    this.add_letter("3", pos);
    this.add_letter("4", pos);
    this.add_letter("'", pos);
    this.add_letter("(", pos);
    this.add_letter(")", pos);
    this.add_letter(" ", pos);
    this.add_letter("=", pos);
    this.add_letter("<", pos);
    this.add_letter(">", pos);
    this.add_letter("(", pos);
    this.add_letter("\"", pos);
    this.add_letter("#", pos);
    this.add_letter("$", pos);
    this.add_letter("%", pos);
    this.add_letter("&", pos);
    this.add_letter("[", pos);
    this.add_letter("\\", pos);
    this.add_letter("]", pos);
    this.add_letter("^", pos);
    this.add_letter("_", pos);
    this.add_letter("`", pos);
    this.add_letter(")", pos);

    // Text lines
    
    var line_pos = 450;
    var s;

    s = new allteria.text_line("Individual text lines:");
    s.translateX(-940);
    s.translateY(line_pos);
    this.scene.add(s);

    s = new allteria.text_line("ABCDÐEÉFGHIÍJKLMNOÓPQRSTUÚVXYÝZÞÆÖ");
    line_pos -= s.get_height();
    s.translateX(-940);
    s.translateY(line_pos);
    this.scene.add(s);

    s = new allteria.text_line("aábcdðeéfghiíjklmnoópqrstuúvxyýzþæö1234567890:,.?+-*/!'()@=<>")
    line_pos -= s.get_height();
    s.translateX(-940);
    s.translateY(line_pos);
    this.scene.add(s);

    s = new allteria.text_line("This is a text line.")
    line_pos -= s.get_height();
    s.translateX(-940);
    s.translateY(line_pos);
    this.scene.add(s);

    // Editable text line
    
    s = new allteria.text_line("This text is editable. 0123456789", 2.5);
    s.set_editable(true);
    s.translateX(-940);
    s.translateY(350);
    this.scene.add(s);

    // Paragraph
    
    var t = "";
    t += "This is a longer text that is shown in a paragraph and should be broken up into smaller lines. ";
    t += "This seems to be working correctly. ";
    var p;
    p = new allteria.paragraph(t, 100);
    p.translateX(-940);
    p.translateY(300);
    this.scene.add(p);

    // Buttons
    
    var b;
    
    b = new allteria.button("Click here 1");
    b.on_click = function(event)
    {
        console.log("You clicked on button 1");
    }
    b.translateX(-860);
    b.translateY(200);
    this.scene.add(b);

    b = new allteria.button("Click here 2");
    b.on_click = function(event)
    {
        console.log("You clicked on button 2");
    }
    b.translateX(-860);
    b.translateY(150);
    this.scene.add(b);

    b = new allteria.button("Click here 3");
    b.on_click = function(event)
    {
        console.log("You clicked on button 3");
    }
    b.translateX(-860);
    b.translateY(100);
    this.scene.add(b);

    b = new allteria.button("Click here 4");
    b.on_click = function(event)
    {
        console.log("You clicked on button 4");
    }
    b.translateX(-860);
    b.translateY(50);
    this.scene.add(b);

    // Checkboxes
    
    cb = new allteria.checkbox("Option 1");
    cb.set_scale(4);
    cb.on_checked = function(event)
    {
        console.log("Option 1 checked");
    };
    cb.on_unchecked = function(event)
    {
        console.log("Option 1 un-checked");
    }
    cb.translateX(-300);
    cb.translateY(200);
    this.scene.add(cb);

    var cb;
    
    cb = new allteria.checkbox("Longer label on this checkbox");
    cb.set_scale(4);
    cb.on_checked = function(event)
    {
        console.log("Longer label checked");
    };
    cb.on_unchecked = function(event)
    {
        console.log("Longer label un-checked");
    }
    cb.translateX(-300);
    cb.translateY(170);
    this.scene.add(cb);

    cb = new allteria.checkbox("Editable label");
    cb.set_scale(4);
    cb.on_checked = function(event)
    {
        console.log("Editable label checked");
    };
    cb.on_unchecked = function(event)
    {
        console.log("Editable label un-checked");
    }
    cb.translateX(-300);
    cb.translateY(140);
    cb.set_editable(true);
    this.scene.add(cb);

    // Individual radio buttons
    
    var rb1 = new allteria.radio_button("Radio button 1");
    rb1.set_scale(3);
    rb1.on_checked = function(event)
    {
        console.log("Radio button 1 checked");
    };
    rb1.on_unchecked = function(event)
    {
        console.log("Radio button 1 un-checked");
    }
    rb1.translateX(-300);
    rb1.translateY(100);
    this.scene.add(rb1);

    var rb2 = new allteria.radio_button("Radio button 2");
    rb2.set_scale(3);
    rb2.on_checked = function(event)
    {
        console.log("Radio button 2 checked");
    };
    rb2.on_unchecked = function(event)
    {
        console.log("Radio button 2 un-checked");
    }
    rb2.translateX(-300);
    rb2.translateY(70);
    this.scene.add(rb2);

    b = new allteria.button("Reset radio buttons");
    b.on_click = function(event)
    {
        rb1.uncheck();
        rb2.uncheck();
    }
    b.translateX(-400);
    b.translateY(30);
    this.scene.add(b);

    // Radio buttons in a group
    
    var rg = new allteria.radio_button_group();
    rg.translateX(-720);
    rg.translateY(-10);
    
    var rb;

    rb = new allteria.radio_button("Radio button 1 in group");
    rb.set_scale(2);
    rb.on_checked = function(event)
    {
        console.log("Radio button 1 in group checked");
    };
    rb.on_unchecked = function(event)
    {
        console.log("Radio button 1 in group un-checked");
    }
    rg.add(rb);
    
    rb = new allteria.radio_button("Radio button 2 in group");
    rb.set_scale(2);
    rb.on_checked = function(event)
    {
        console.log("Radio button 2 in group checked");
    };
    rb.on_unchecked = function(event)
    {
        console.log("Radio button 2 in group un-checked");
    }
    rb.translateY(-30);
    rg.add(rb);

    rb = new allteria.radio_button("Radio button 3 in group");
    rb.set_scale(2);
    rb.on_checked = function(event)
    {
        console.log("Radio button 3 in group checked");
    };
    rb.on_unchecked = function(event)
    {
        console.log("Radio button 3 in group un-checked");
    }
    rb.translateY(-60);
    rg.add(rb);

    this.scene.add(rg);

    // Frame

    var f;

    f = new allteria.frame();
    f.translateY(200);
    f.translateX(150);

    var t = new allteria.text_line("A text line within a frame.");
    t.translateX(-360);
    f.add(t);

    var b = new allteria.button("Button");
    b.translateY(-190);
    b.translateX(320);
    f.add(b);

    var c = new allteria.checkbox("A checkbox within a frame");
    c.translateY(-80);
    f.add(c);

    this.scene.add(f);
}

allteria.world.prototype.render = function render()
{
    var self = this;
    setTimeout(function()
               {
                   requestAnimationFrame(function(event)
                                         {
                                             self.render.call(self);
                                         });
               }, this.ms_per_frame);
    this.update();
    this.renderer.render(this.scene, this.camera);
}

allteria.world.prototype.update = function update_scene()
{
    for (var i = 0; i < this.components.length; i++)
    {
        var comp = this.components[i];
        comp.render.call(comp);
    }

    tween.update();
}

allteria.world.prototype.identify = function identify()
{
    this.send("My name is allteria");
}
