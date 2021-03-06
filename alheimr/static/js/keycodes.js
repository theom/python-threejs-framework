
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

// These are the characters that have been implemented

// keypress keyCode/charCode
// 0 = 
// 1 = 
// 2 = 
// 3 = 
// 4 = 
// 5 = 
// 6 = 
// 7 = 
// 8 = 
// 9 = 
// 10 = 
// 11 = 
// 12 = 
// 13 = 
// 14 = 
// 15 = 
// 16 = 
// 17 = 
// 18 = 
// 19 = 
// 20 = 
// 21 = 
// 22 = 
// 23 = 
// 24 = 
// 25 = 
// 26 = 
// 27 = 
// 28 = 
// 29 = 
// 30 = 
// 31 = 
// 32 = <space>
// 33 = !
// 34 = (")
// 35 = (#)
// 36 = ($)
// 37 = (%)
// 38 = (&)
// 39 = '
// 40 = (
// 41 = )
// 42 = *
// 43 = +
// 44 = ,
// 45 = -
// 46 = .
// 47 = /
// 48 = 0
// 49 = 1
// 50 = 2
// 51 = 3
// 52 = 4
// 53 = 5
// 54 = 6
// 55 = 7
// 56 = 8
// 57 = 9
// 58 = :
// 59 = ;
// 60 = <
// 61 = =
// 62 = >
// 63 = ?
// 64 = @
// 65 = A
// 66 = B
// 67 = C
// 68 = D
// 69 = E
// 70 = F
// 71 = G
// 72 = H
// 73 = I
// 74 = J
// 75 = K
// 76 = L
// 77 = M
// 78 = N
// 79 = O
// 80 = P
// 81 = Q
// 82 = R
// 83 = S
// 84 = T
// 85 = U
// 86 = V
// 87 = W
// 88 = X
// 89 = Y
// 90 = Z
// 91 = ([)
// 92 = (\)
// 93 = (])
// 94 = (^)
// 95 = (_)
// 96 = (`)
// 97 = a
// 98 = b
// 99 = c
// 100 = d
// 101 = e
// 102 = f
// 103 = g
// 104 = h
// 105 = i
// 106 = j
// 107 = k
// 108 = l
// 109 = m
// 110 = n
// 111 = o
// 112 = p
// 113 = q
// 114 = r
// 115 = s
// 116 = t
// 117 = u
// 118 = v
// 119 = w
// 120 = x
// 121 = y
// 122 = z
// 123 = 
// 124 = 
// 125 = 
// 126 = 
// 127 = 
// 128 = 
// 129 = 
// 130 = 
// 131 = 
// 132 = 
// 133 = 
// 134 = 
// 135 = 
// 136 = 
// 137 = 
// 138 = 
// 139 = 
// 140 = 
// 141 = 
// 142 = 
// 143 = 
// 144 = 
// 145 = 
// 146 = 
// 147 = 
// 148 = 
// 149 = 
// 150 = 
// 151 = 
// 152 = 
// 153 = 
// 154 = 
// 155 = 
// 156 = 
// 157 = 
// 158 = 
// 159 = 
// 160 = 
// 161 = 
// 162 = 
// 163 = 
// 164 = 
// 165 = 
// 166 = 
// 167 = 
// 168 = 
// 169 = 
// 170 = 
// 171 = 
// 172 = 
// 173 = 
// 174 = 
// 175 = 
// 176 = 
// 177 = 
// 178 = 
// 179 = 
// 180 = 
// 181 = 
// 182 = 
// 183 = 
// 184 = 
// 185 = 
// 186 = 
// 187 = 
// 188 = 
// 189 = 
// 190 = 
// 191 = 
// 192 = 
// 193 = Á
// 194 = 
// 195 = 
// 196 = 
// 197 = 
// 198 = Æ
// 199 = 
// 200 = 
// 201 = É
// 202 = 
// 203 = 
// 204 = 
// 205 = Í
// 206 = 
// 207 = 
// 208 = Ð
// 209 = 
// 210 = 
// 211 = Ó
// 212 = 
// 213 = 
// 214 = Ö
// 215 = 
// 216 = 
// 217 = 
// 218 = Ú
// 219 = 
// 220 = 
// 221 = Ý
// 222 = Þ
// 223 = 
// 224 = 
// 225 = á
// 226 = 
// 227 = 
// 228 = 
// 229 = 
// 230 = æ
// 231 = 
// 232 = 
// 233 = é
// 234 = 
// 235 = 
// 236 = 
// 237 = í
// 238 = 
// 239 = 
// 240 = ð
// 241 = 
// 242 = 
// 243 = ó
// 244 = 
// 245 = 
// 246 = ö
// 247 = 
// 248 = 
// 249 = 
// 250 = ú
// 251 = 
// 252 = 
// 253 = ý
// 254 = þ

// keyup (acute + keyCode + shiftKey, acute + keyCode)
// 65 = Á á
// 66 = 
// 67 = 
// 68 =
// 69 = É é
// 70 = 
// 71 = 
// 72 = 
// 73 = Í í
// 74 = 
// 75 = 
// 76 = 
// 77 = 
// 78 = 
// 79 = Ó ó
// 80 = 
// 81 = 
// 82 = 
// 83 = 
// 84 = 
// 85 = Ú ú
// 86 = 
// 87 = 
// 88 = 
// 89 = Ý ý
