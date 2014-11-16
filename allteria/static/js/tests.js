
allteria.tests = function tests(scene, hud_scene)
{
    this.scene = scene;
    this.hud_scene = hud_scene;
}

allteria.tests.prototype.add_letter = function add_letter(letter, pos, scale)
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

allteria.tests.prototype.test_letters = function test_letters()
{
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
}

allteria.tests.prototype.test_text_lines = function test_text_lines()
{
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
}

allteria.tests.prototype.test_editable_text_lines = function test_editable_text_lines()
{
    var s;
    
    s = new allteria.text_line("This text is editable. 0123456789", 2.5);
    s.set_editable(true);
    s.translateX(-940);
    s.translateY(350);
    this.scene.add(s);
}

allteria.tests.prototype.test_paragraphs = function test_paragraphs()
{
    var t = "";
    t += "This is a longer text that is shown in a paragraph and should be broken up into smaller lines. ";
    t += "This seems to be working correctly. ";
    var p;
    p = new allteria.paragraph(t, 100);
    p.translateX(-940);
    p.translateY(300);
    this.scene.add(p);
}

allteria.tests.prototype.test_buttons = function test_buttons()
{
    var b;
    
    b = new allteria.button("Click here 1");
    b.on_click = function(event)
    {
        console.log("You clicked on button 1");
    };
    b.translateX(-860);
    b.translateY(200);
    this.scene.add(b);

    b = new allteria.button("Click here 2");
    b.on_click = function(event)
    {
        console.log("You clicked on button 2");
    };
    b.translateX(-860);
    b.translateY(150);
    this.scene.add(b);

    b = new allteria.button("Click here 3");
    b.on_click = function(event)
    {
        console.log("You clicked on button 3");
    };
    b.translateX(-860);
    b.translateY(100);
    this.scene.add(b);

    b = new allteria.button("Click here 4");
    b.on_click = function(event)
    {
        console.log("You clicked on button 4");
    };
    b.translateX(-860);
    b.translateY(50);
    this.scene.add(b);
}

allteria.tests.prototype.test_checkboxes = function test_checkboxes()
{
    var cb;

    cb = new allteria.checkbox("Option 1");
    cb.set_scale(4);
    cb.on_checked = function(event)
    {
        console.log("Option 1 checked");
    };
    cb.on_unchecked = function(event)
    {
        console.log("Option 1 un-checked");
    };
    cb.translateX(-300);
    cb.translateY(200);
    this.scene.add(cb);
    
    cb = new allteria.checkbox("Longer label on this checkbox");
    cb.set_scale(4);
    cb.on_checked = function(event)
    {
        console.log("Longer label checked");
    };
    cb.on_unchecked = function(event)
    {
        console.log("Longer label un-checked");
    };
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
    };
    cb.translateX(-300);
    cb.translateY(140);
    cb.set_editable(true);
    this.scene.add(cb);
}

allteria.tests.prototype.test_radio_buttons = function test_radio_buttons()
{
    var rb1 = new allteria.radio_button("Radio button 1");
    rb1.set_scale(3);
    rb1.on_checked = function(event)
    {
        console.log("Radio button 1 checked");
    };
    rb1.on_unchecked = function(event)
    {
        console.log("Radio button 1 un-checked");
    };
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
    };
    rb2.translateX(-300);
    rb2.translateY(70);
    this.scene.add(rb2);

    var b = new allteria.button("Reset radio buttons");
    b.on_click = function(event)
    {
        rb1.uncheck();
        rb2.uncheck();
    };
    b.translateX(-400);
    b.translateY(30);
    this.scene.add(b);
}

allteria.tests.prototype.test_radio_button_groups = function test_radio_button_groups()
{
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
    };
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
    };
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
    };
    rb.translateY(-60);
    rg.add(rb);

    this.scene.add(rg);
}

allteria.tests.prototype.test_frames = function test_frames()
{
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
    c.translateX(100);
    c.translateY(-80);
    f.add(c);

    f.resize();

    this.scene.add(f);

    // Toggle the frame's visibility
    var b = new allteria.button("Show/hide frame");
    b.translateY(270);
    b.translateX(-130);
    var vis = false;
    b.on_click = function(event)
    {
        f.show(vis);
        vis = !vis;
    };
    this.scene.add(b);
}

allteria.tests.prototype.test_zoom = function test_zoom(camera)
{
    var b = new allteria.button("Zoom in/out");
    b.translateY(-30);
    b.translateX(-400);
    var dir = 1;
    b.on_click = function(event)
    {
        camera.translateZ(dir * 500);
        dir = -dir;
    };
    this.scene.add(b);
}

allteria.tests.prototype.test_hud = function test_hud()
{
    var t = new allteria.text_line("HUD text");
    t.translateX(-1050);
    this.hud_scene.add(t);
}
