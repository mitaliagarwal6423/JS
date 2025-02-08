const accountId = 12345
let accountEmail = "mitaliagarwal@gmail.com"
var accountPassword = "125678"
accountCity = "Pune"
let accountState // blank variable is read as undefined variable.
/*
var variable should not be used because of issue in block scope and functional scope. That's why we use let variable
variable defined by any pre defined variable then also it is created
var and let can be changed later if needed.
*/
// accountId =89760
// Cannot change constant variable in javascript
console.log(accountId) // to print single varaible
console.table([accountEmail, accountId,accountPassword,accountCity, accountState]) // to print all the variables in single go