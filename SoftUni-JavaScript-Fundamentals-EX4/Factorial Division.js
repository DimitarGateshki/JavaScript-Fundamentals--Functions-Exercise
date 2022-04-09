function devFac(n1,n2) {
    function factoriel(numb) {
        let sum=1;
    
        while(numb!=1){
            sum*=numb;
            numb--;
        }
    
        return sum;
    }

    

    let fac1=factoriel(n1);
    let fac2=factoriel(n2);
    let end=fac1/fac2;
    console.log(end.toFixed(2))
}
