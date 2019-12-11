let fs = require('fs');
let source = require('./tanhuaAwesome.json')
let arr = source.glyphs;
console.log(source.id);
let data = {};
for(let i = 0; i < arr.length; i++) {
    let v = arr[i];
    data[v.font_class] = v.unicode_decimal;
}

// arr.foreach(function(v, i, a) {
//     data[v.font_class] = v.unicode_decimal
// });



let str = JSON.stringify(data)
 
 fs.writeFile('data.json',str,function(err){
 if (err) {res.status(500).send('Server is error...')}
 })