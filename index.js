var OsInfo = require('./modules/OSInfo');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit' : quit(); break;
			case '/ver'	: showVersion(); break;
			case '/user' : showLogin(); break;
			case '/getOSinfo' : showOsInfo(); break;
			default : process.stderr.write('Wrong instruction!\n');
		}

		function quit() {
			process.stdout.write('Quiting app!\n');
			process.exit();
		}

		function showVersion() {
			process.stdout.write(process.version + '\n');
		}

		function showLogin() {
			process.stdout.write(process.env.username + '\n');
		}

		function showOsInfo() {
			OsInfo.print();
		}
	}
})
