function validator(password) {

    let checl1;
    let checl2=true;
    let checl3;
        
        if (password.length >= 6 && password.length <= 10) {
            checl1= true;
        }else{
            console.log('Password must be between 6 and 10 characters');
            checl1= false;

        }
    

    

        let token=true;
    
        for (let i = 0; i < password.length; i++) {
            let cr=password[i].charCodeAt();
            if ((cr>=48 && cr<=57)||(cr>=65 && cr<=90)||(cr>=97 && cr<=122)) {
                
            }else{
                token=false;
            }

            if(!token){
                console.log('Password must consist only of letters and digits');
                checl2= false;
                break;
                
            }
            
        }

        
    

    
        let count=0;

        
        for (let i = 0; i < password.length; i++) {
            let cr=password[i].charCodeAt();
            if(cr>=48 && cr<=57){
                count++;
            }
            
        }

        if(count<2){
            console.log('Password must have at least 2 digits');
            checl3= false;
        }else{
            checl3= true;
        }
    

    if(checl3 && checl2 && checl1){
        console.log('Password is valid');
    }
    
}