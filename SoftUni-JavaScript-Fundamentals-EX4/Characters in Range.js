function printRange(ch1,ch2) {
    
    function check(pr1,pr2) {
        if (pr1>pr2) {
            return false
        }else{
            return true;
        }
    }

    let first=ch1.charCodeAt();
    let second=ch2.charCodeAt();
    let result='';
    if (check(first,second)) {
        for (let index = first+1; index < second; index++) {
            result+=String.fromCharCode(index)+' ';
        }
    }else{
        for (let index = second+1; index < first; index++) {
            result+=String.fromCharCode(index)+' ';
        }
    }

    console.log(result);
}
