const accountId = 244001
let accountemail = "dikshit@gmail.com"
var accountpassword = "007"
accountcity = "Bangaluru"

console.log(accountId); //Now that is correct.

// but now; 

// accountId = 009

/* It gives error like this 

accountId = 009
          ^

TypeError: Assignment to constant variable.\
Because we can not change the value of const.........
*/

accountemail= "maan@gmai.com"
accountpassword = "99999"
accountcity="Moradabad"
let accountstate;
/*
prefere not to use var
Because of issue is block scope and functional scope

*/

console.table([accountId,accountemail,accountpassword,accountcity,accountstate])
