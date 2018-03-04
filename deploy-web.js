var exec = require('child_process').exec;
var argv = require('minimist')(process.argv.slice(2));

var cmd = 'firebase deploy --project ';

if(argv.hasOwnProperty('p')){
  cmd += argv.p;
  console.log('run command : ' + cmd);
  exec(cmd, function(error, stdout, stderr) {
    if(error){
      console.log(error);
      return false;
    } 

    console.log('stdout : ' + stdout);
    console.log('stderr : ' + stderr);
  });
}