var fs = require('fs');

function readComs(coms, res, base) {//载入子组件的config
  if(!coms) return;
  var result = {};
  coms.forEach(function (com) {
    var comUrl = base + com + '/package.json';
    var package = readFile(comUrl, res);
    result[com] = package.datav;
  });
  return result;
}

//读取组件pakage.json的文件
function readFile(url, res) {
  try {
    return JSON.parse(fs.readFileSync(url, 'utf8'));
  } catch(e) {
    var err = {
      err: 'pakage.json parse error: ---' + url,
      info: e
    };
    return res && res.json(err);
  }
}

module.exports = {
  coms: readComs,
  file: readFile
};
