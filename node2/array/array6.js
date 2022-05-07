var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25}, {name: 'test3', age: 27}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);

Users.splice(1, 0, {name: 'test4', age: 22});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2, 1);
console.log('splice()로 인덱스 2의 요소를 1개를 삭제한 후');
console.dir(Users);