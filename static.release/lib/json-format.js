/*
	json-format v.1.1
	http://github.com/phoboslab/json-format
	Released under MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/

var p = [],
  push = function( m ) { return '\\' + p.push( m ) + '\\'; },
  pop = function( m, i ) { return p[i-1] },
  tabs = function( count ) { return new Array( count + 1 ).join( '  ' ); };

module.exports = function( json ) {
  try {
    JSON.parse(json)
  } catch(e) {
    return json;
  }
  if(!json)return json;
  p = [];
  var out = "",
    indent = 0;
  
  // Extract backslashes and strings
  if (typeof json != 'string') {
    json = JSON.stringify(json);
  }
  json = json
    .replace( /\\./g, push )
    .replace( /(".*?"|'.*?')/g, push )
    .replace( /\s+/g, '' );
  
  // Indent and insert newlines
  for( var i = 0; i < json.length; i++ ) {
    var c = json.charAt(i);
    
    switch(c) {
      case '{':
      case '[':
        out += c + "\n" + tabs(++indent);
        break;
      case '}':
      case ']':
        out += "\n" + tabs(--indent) + c;
        break;
      case ',':
        out += ",\n" + tabs(indent);
        break;
      case ':':
        out += ": ";
        break;
      default:
        out += c;
        break;      
    }
  }
  
  // Strip whitespace from numeric arrays and put backslashes 
  // and strings back in
  out = out
    .replace( /\[[\d,\s]+?\]/g, function(m){ return m.replace(/\s/g,''); } )
    .replace( /\\(\d+)\\/g, pop ) // strings
    .replace( /\\(\d+)\\/g, pop ) // backslashes in strings
    .replace( /\{[\n\t]+\}/g, '{}') // clear spaces in empty object
    .replace( /\[[\n\t]+\]/g, '[]'); //clear spaces in empty array
  
  return out;
};
