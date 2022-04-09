function Palindrome(arr) {
    
    function reverse(numb) {
        let revursed='';
        let n=numb.toString();
        for (let i = n.length-1; i>=0; i--) {
            revursed+=n[i];
        }
        return revursed;
    }

    let revursed='';
    for (let i = 0; i < arr.length; i++) {
        revursed=reverse(arr[i]);
        if (Number(revursed)==arr[i]) {
            console.log(true);
        }else{
            console.log(false);
        }
        
    }
}