function nXn(numb) {

    function line(n) {
        let res='';

        for (let i = 0; i < n; i++) {
            res+=n+' ';
            
        }

        console.log(res);
    }

    for (let i = 0; i < numb; i++) {
        line(numb);
        
    }
    
}