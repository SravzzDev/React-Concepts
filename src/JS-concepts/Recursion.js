export function Recursion() {
    function SumOfNIntegers(n){
        if(n===0)return 0;
        else if(n===1)return 1;
        else{
            return n + SumOfNIntegers(n-1);
        }
    }
    console.log(`Recursion : ${SumOfNIntegers(11)}`);
}
