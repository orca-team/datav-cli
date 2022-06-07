var urllib = require('urllib');
var formstream = require('formstream');
var auth   = require('./auth');

module.exports.upload = function(url, params, filePath, callback) {
  var form = formstream();
  auth.request(form, function(){
    form.file('package', filePath);

    for (var i in params) {
      form.field(i, params[i]);
    }

    var req = urllib.request(url, {
      method: 'POST',
      headers: form.headers(),
      stream: form,
      timeout: 5*60*1000
    }, function (err, data, res) {
      callback(err, data);
    });
  });
}
