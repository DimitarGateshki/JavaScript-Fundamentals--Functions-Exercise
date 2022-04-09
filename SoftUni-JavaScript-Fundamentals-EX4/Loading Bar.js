function loading(procent) {
    let result;

    if(procent!=100){
        result=procent.toString()+'% [';
        for (let i = 0; i < 10; i++) {
            if (i<(procent/10)) {
                result+='%';
            }else{
                result+='.'
            }
            
        }
        result+=']';
        
        console.log(result);
        console.log('Still loading...');
    }else{
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    }
}