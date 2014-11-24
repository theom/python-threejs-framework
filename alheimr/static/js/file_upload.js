
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

alheimr.file_upload = function file_upload(text)
{
    alheimr.ui_component.call(this);

    this.button = new alheimr.button(text);
    var self = this;
    this.button.on_click = function(event)
    {
        self.on_click(event);
    };
    
    this.add(this.button);
}

alheimr.extend(alheimr.file_upload, alheimr.ui_component);

alheimr.file_upload.prototype.on_click = function on_click(event)
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

alheimr.file_upload.prototype.on_change = function on_change(event)
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
