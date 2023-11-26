const accountId=2346
let accountEmail="Amar@123"
var accountPassword="1234"
accountCity="jaipur"
let accountState;

// accountId=2//not allowed
accountEmail="thundercity"
accountPassword="9876"
accountCity="Bharatpur"
/*prefer not to use var 
   because of issue in block scope and functional scope
*/

console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

