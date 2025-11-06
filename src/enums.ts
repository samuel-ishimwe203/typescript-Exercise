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