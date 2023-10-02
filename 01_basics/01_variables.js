const accountId = 354
let accountEmail = "ishita@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

//accountId = 2// not possible to change because of const defined above hence constant value 
accountEmail = "hello@google.com"
accountPassword = "1243"
accountCity = "Bangalore"
//console.log(accountCity);

/*
Prefer never or not to use var because of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity , accountState])