var Person = {};

Person['age'] = 20;
Person['name'] = 'test';
Person.mobile = '010-1234-5678';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);