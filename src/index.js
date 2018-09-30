module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) { 
return false; 
} 
let massiv = str.split(''); 
let a,b,c,d = 0; 

for (let i=0;i<massiv.length;i++){ 
if (massiv[i] = "(") { 
a++; 
} 
if (massiv[i] = ")") { 
a--; 
} 
if (massiv[i] = "[") { 
b++; 
} 
if (massiv[i] = "]") { 
b--; 
} 
if (massiv[i] = "{") { 
c++; 
} 
if (massiv[i] = "}") { 
c++; 
} 
if (massiv[i] = "|") { 
d++; 
} 
} 
if (a==0 || b==0 || c==0 || d%2==0){ 
return true; 
}
}
