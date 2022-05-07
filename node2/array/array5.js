var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25}, {name: 'test3', age: 27}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);