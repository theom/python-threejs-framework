
// @author theom / https://www.axonehf.com

allteria.file_upload = function file_upload(text)
{
    allteria.ui_component.call(this);

    this.button = new allteria.button(text);
    var self = this;
    this.button.on_click = function(event)
    {
        self.on_click(event);
    };
    
    this.add(this.button);
}

allteria.extend(allteria.file_upload, allteria.ui_component);

allteria.file_upload.prototype.on_click = function on_click(event)
{
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.style.display = "none";
    var self = this;
    input.addEventListener("change", function(event)
                           {
                               self.on_change(event);
                           });
    document.body.appendChild(input);
    input.click();
}

allteria.file_upload.prototype.on_change = function on_change(event)
{
    var file = event.target.files[0];
    console.log("file selected: " + file.name);

    var reader = new FileReader();
    var self = this;
    reader.onload = function(event)
    {
        console.log("done reading file: " + event.target.result);
        if (self.on_load)
        {
            self.on_load(event);
        }
    };

    // Do this differently based on the file type
    reader.readAsDataURL(file);
}
