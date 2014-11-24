
// Copyright Vassilis Petroulias [DRDigit]
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

allteria.base64 = function base64()
{
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.lookup = null;
}

allteria.base64.prototype.encode = function encode(s)
{
    var buffer = this.to_utf8(s);
    var position = -1;
    var len = buffer.length;
    var nan0, nan1, nan2;
    var enc = [, , , ];
    
    var result = '';
    while (++position < len)
    {
        nan0 = buffer[position];
        nan1 = buffer[++position];
        enc[0] = nan0 >> 2;
        enc[1] = ((nan0 & 3) << 4) | (nan1 >> 4);
        if (isNaN(nan1))
        {
            enc[2] = enc[3] = 64;
        }
        else
        {
            nan2 = buffer[++position];
            enc[2] = ((nan1 & 15) << 2) | (nan2 >> 6);
            enc[3] = (isNaN(nan2)) ? 64 : nan2 & 63;
        }
        result += this.alphabet[enc[0]] + this.alphabet[enc[1]] + this.alphabet[enc[2]] + this.alphabet[enc[3]];
    }
    
    return result;
}
    
allteria.base64.prototype.decode = function encode(s)
{
    if (s.length % 4)
    {
        throw new Error("InvalidCharacterError: 'allteria.base64.decode' failed: The string to be decoded is not correctly encoded.");
    }
    
    var buffer = this.from_utf8(s);
    var position = 0;
    var len = buffer.length;
    
    var result = '';
    while (position < len)
    {
        if (buffer[position] < 128)
        {
            result += String.fromCharCode(buffer[position++]);
        }
        else if (buffer[position] > 191 && buffer[position] < 224)
        {
            result += String.fromCharCode(((buffer[position++] & 31) << 6) | (buffer[position++] & 63));
        }
        else
        {
            result += String.fromCharCode(((buffer[position++] & 15) << 12) | ((buffer[position++] & 63) << 6) | (buffer[position++] & 63));
        }
    }
    
    return result;
}
    
allteria.base64.prototype.to_utf8 = function to_utf8(s)
{
    var position = -1;
    var len = s.length;
    var chr, buffer = [];
    
    if (/^[\x00-\x7f]*$/.test(s)) while (++position < len)
    {
        buffer.push(s.charCodeAt(position));
    }
    else
    {
        while (++position < len)
        {
            chr = s.charCodeAt(position);
            if (chr < 128)
            {
                buffer.push(chr);
            }
            else if (chr < 2048)
            {
                buffer.push((chr >> 6) | 192, (chr & 63) | 128);
            }
            else
            {
                buffer.push((chr >> 12) | 224, ((chr >> 6) & 63) | 128, (chr & 63) | 128);
            }
        }
        
        return buffer;
    }
}
    
allteria.base64.prototype.from_utf8 = function from_utf8(s)
{
    var position = -1;
    var len;
    var buffer = [];
    var enc = [, , , ];
        
    if (!this.lookup)
    {
        len = this.alphabet.length;
        this.lookup = {};
        while (++position < len)
        {
            this.lookup[this.alphabet.charAt(position)] = position;
        }
        position = -1;
    }
    
    len = s.length;
    while (++position < len)
    {
        enc[0] = this.lookup[s.charAt(position)];
        enc[1] = this.lookup[s.charAt(++position)];
        buffer.push((enc[0] << 2) | (enc[1] >> 4));
        enc[2] = this.lookup[s.charAt(++position)];
        if (enc[2] == 64)
        {
            break;
        }
        buffer.push(((enc[1] & 15) << 4) | (enc[2] >> 2));
        enc[3] = this.lookup[s.charAt(++position)];
        if (enc[3] == 64)
        {
            break;
        }
        buffer.push(((enc[2] & 3) << 6) | enc[3]);
    }
    
    return buffer;
}
