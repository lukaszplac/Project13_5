var os = require('os');
var colors = require('colors');
var tc = require('../modules/TimeConv.js');
function getOsInfo() {
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
		}
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System: '.grey, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime in minutes: ~'.green, tc.convertToMin(uptime));
	console.log('Uptime in hours: ~'.magenta, tc.convertToHours(uptime));
	console.log(colors.rainbow('User name:'), userInfo.username);
	console.log('Home dir:'.cyan, userInfo.homedir);		
}

exports.print = getOsInfo;
