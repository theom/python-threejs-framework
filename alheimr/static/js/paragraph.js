
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

alheimr.paragraph = function paragraph(text, width)
{
    alheimr.ui_component.call(this);

    this.width = width || 300;
    this.line_y_pos = 0;
    this.line_spacing = 2;
    this.lines = [];
    this.split_into_text_lines(text);
}

alheimr.extend(alheimr.paragraph, alheimr.ui_component);

// private

alheimr.paragraph.prototype.split_into_text_lines = function split_into_text_lines(text)
{
    this.text = text;
    
    // This is an approximation of the letter count per line
    var letter = new alheimr.letter("A");
    var letter_width = letter.get_half_width() * 2;
    var letters_per_line = this.width / letter_width;
    
    var line_spacing = this.line_spacing * letter.get_scale();
    var words = text.split(" ");
    var line_count = 0;
    var word_index = 0;
    while (word_index < words.length)
    {
        var line_text = "";
        var done = false;
        while (word_index < words.length && !done)
        {
            if (line_text.length + 1 + words[word_index].length < letters_per_line)
            {
                line_text += " " + words[word_index];
                word_index++;
            }
            else
            {
                done = true;
            }
        }
        var line = new alheimr.text_line(line_text);
        line.translateY(this.line_y_pos);
        this.add(line);
        this.line_y_pos -= line.get_height() + line_spacing;
        this.lines[line_count++] = line;
    }
}
