var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25}];
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name: 'test3', age: 27});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);