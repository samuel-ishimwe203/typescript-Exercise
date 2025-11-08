// enums in typescript 

enum role{
    Admin,
    User,
    Guest
    }


    function getRole(user:role){
        if(user===role.Admin){
            console.log('you are allowed to enter to this site please')
        }
        else if(user===role.User){
            console.log("you are allowed to enter but there is something that you can't access")
        }
        else {
            console.log('you arn not allowed to enter here please')
        }
    }


    console.log(getRole(role.Admin))

    // 2 Example of enums

enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

    function getStatus(status:StatusCode){
        if(status===StatusCode.OK){
            return ('Request was successful')
        
        }else if(status===StatusCode.BadRequest){
            return ('Bad request please check again')
        }
        else if(status===StatusCode.Unauthorized){
            return ('You ar not allowed to access this page please')
        }
        else{
            return ('Page not found please check again')
        }
    }

    console.log(getStatus(StatusCode.BadRequest))
// generics in typescript : it allows you to create the reusable and flexible code that can work with any type which helps to maintain code and safe.

function identify<T>(value:T):T{
    return value
}

console.log(identify<number>(200))
    