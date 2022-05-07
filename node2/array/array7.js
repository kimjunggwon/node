var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25}, {name: 'test3', age: 27}, {name: 'test4', age: 22}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1, 3);
console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

var Users3 = Users.slice(1);
console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);
