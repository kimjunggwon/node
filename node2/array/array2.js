var Users = [{name: 'test1', age: 20}, {name: 'test2', age: 25},{name: 'test3', age: 27}];

console.log('배열 요소의 수 : %d', Users.length);
for(var i = 0; i < Users.length; i++){
    console.log('배열 요소 #' + i + ' : %s', Users[i].name);
}

console.log('\nforeach 구문 사용');
Users.forEach(function(item, index){
    console.log('배열 요소 #'+index+' : %s', item.name);
});