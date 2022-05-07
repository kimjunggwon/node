var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25}];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name: 'test3', age: 27});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();
console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);