function oddAndEvenSum(x) {
    let number=x.toString();

    let oddSum=0;
    let evenSum=0;

    for (let i = 0; i <number.length; i++) {
        if (Number(number[i])%2==0) {
            evenSum+=Number(number[i]);
        }else{
            oddSum+=Number(number[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
