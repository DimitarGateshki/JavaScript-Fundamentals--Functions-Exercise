function sumAndSub(n1,n2,n3) {

    function sum(el1,el2) {
        return el1+el2;
    }
    function sub(el1,el2) {
        return el1-el2;
    }

    let x=sum(n1,n2);
    let end=sub(x,n3);
    console.log (end);
}