function perfectN(number) {

    function positive(n) {
        if(n<0){
            console.log("It\'s not so perfect.");
            return ;
        }
    }

    let devs=[];
    let numb=number;

    for (let i = 0; i <=numb/2; i++) {
        if(numb%i==0){
            devs.push(i);
        }
        
    }
    let sum=0;

    for (let i = 0; i < devs.length; i++) {
        sum+=devs[i];
        
    }

    if(sum==number){
        console.log('We have a perfect number!');
    }else{
        console.log("It\'s not so perfect.");
    }
    
}
