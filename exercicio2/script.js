const num = +prompt("Diga um número!")
const tabuada=[1,2,3,4,5,6,7,8,9,10]

for(let i in tabuada){
    console.log(`${num}x${tabuada[i]}=${num*tabuada[i]}`);
}
