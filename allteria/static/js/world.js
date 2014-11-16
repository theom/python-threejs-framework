
// @author theom / https://www.axonehf.com

allteria.world = function world()
{
    this.components = [];
}

allteria.world.prototype.start = function start()
{
    this.perspective = true;
    this.fps = 20;
    this.stack = [];
    this.left_mouse_down = false;
    this.ms_per_frame = 1000 / this.fps;
    
    this.create_renderer();
    this.create_scene();
    this.create_hud_scene();
    this.create_camera();
    this.create_hud_camera();
    this.create_lights();
    this.init_window_resize();
    this.init_picking();
    this.init_keyboard();
    this.connect_to_server()
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
    this.renderer.autoClear = false;
    this.canvas.appendChild(this.renderer.domElement);
}

allteria.world.prototype.create_scene = function create_scene()
{
    this.scene = new three.Scene();
}

allteria.world.prototype.create_hud_scene = function create_hud_scene()
{
    this.hud_scene = new three.Scene();
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
        this.camera.position.z = 700;
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

allteria.world.prototype.create_hud_camera = function create_hud_camera()
{
    var w = this.canvas.clientWidth;
    var h = this.canvas.clientHeight;
    var far_plane = 2000;
    var near_plane = -100;

    this.hud_camera = new three.OrthographicCamera(-w/2, w/2, h/2, -h/2, near_plane, far_plane);
    this.hud_camera.position.z = 200;

    this.hud_camera.lookAt(this.hud_scene.position);
    this.hud_scene.add(this.hud_camera);
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
    window.addEventListener("mouseup",   function(event) { self.on_mouse_up(event); }, false);
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
    //console.log("socket message: '" + event.data + "'");
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
            case "image":    this.display_image(this.stack.pop()); break;
            default:         this.stack.push(word);
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

        // Check if the scene is being dragged
        if (this.left_mouse_down)
        {
            var dx = this.mouse_x - event.clientX;
            var dy = this.mouse_y - event.clientY;
            this.camera.translateX(dx);
            this.camera.translateY(-dy)
            this.mouse_x = event.clientX;
            this.mouse_y = event.clientY;
        }
    }
}

allteria.world.prototype.on_mouse_down = function on_mouse_down(event)
{
    this.left_mouse_down = true;
    this.mouse_x = event.clientX;
    this.mouse_y = event.clientY;
    
    if (this.picked_component !== undefined)
    {
        if (this.picked_component.on_mouse_down)
        {
            event.object = this.picked_object;
            this.picked_component.on_mouse_down.call(this.picked_component, event);
        }
    }
}

allteria.world.prototype.on_mouse_up = function on_mouse_up(event)
{
    this.left_mouse_down = false;
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

allteria.world.prototype.create_world = function create_scene()
{
    var tests = new allteria.tests(this.scene, this.hud_scene);
    
    tests.test_letters();
    tests.test_text_lines();
    tests.test_editable_text_lines();
    tests.test_paragraphs();
    tests.test_buttons();
    tests.test_checkboxes();
    tests.test_radio_buttons();
    tests.test_radio_button_groups();
    tests.test_frames();
    tests.test_zoom(this.camera);
    tests.test_hud();
    
    // File upload
    var fu = new allteria.file_upload("Upload image");
    var self = this;
    fu.on_load = function(event)
    {
        // This is a bit crude but works
        self.socket.send(event.target.result + " image");
    }
    fu.translateY(-120);
    fu.translateX(200);
    this.scene.add(fu);

    // Display an image received from the server
    this.image = new allteria.image(200);
    this.image.translateY(-200);
    this.image.on_click = function(event)
    {
        console.log("Image clicked");
    };
    this.scene.add(this.image);
}

// Temporary image test method. Called by the message parser.
allteria.world.prototype.display_image = function display_image(img_base64)
{
    this.image.set_image(img_base64);
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
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    this.renderer.render(this.hud_scene, this.hud_camera);    
}

allteria.world.prototype.update = function update_scene()
{
    for (var i = 0; i < this.components.length; i++)
    {
        var comp = this.components[i];
        if (comp.render)
        {
            comp.render.call(comp);
        }
    }

    tween.update();
}

allteria.world.prototype.identify = function identify()
{
    this.send("My name is allteria");
}
