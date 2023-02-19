let person = {
    firstName: 'Thirukkural',
    lastName: 'Selvan',
    age:18,
    dept:'cse'
};
const arr = ['snapping', ['ek','two','theen'] , 'two', 'where', 'r', 'you']
console.log(person);
delete person.age;
person.new = true
console.log(person);
console.log('age' in person);