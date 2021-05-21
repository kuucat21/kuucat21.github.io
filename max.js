const num1 = 139;
const num2 = 832;
const num3 = 234;

const getmax =(a,b,c)=>{
    let max = a;
    if(max<b){
        max = b;
    }else if(max<c){
        max = c;
    }
    return max;
};
const max = getmax(num1,num2,num3);
console.log(`最大値は${max}`);
