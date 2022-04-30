var nconf = require('nconf');
nconf.env();

console.log('현재 디렉토리의 값 : %s', nconf.get('PWD'));