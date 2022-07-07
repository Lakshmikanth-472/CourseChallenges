//challenge1 
const johnBmi=23.9;
const markBmi=28.3;
if(johnBmi>markBmi)
{
    console.log(`John's bgm ${johnBmi}is greater than Mark's bmi ${markBmi}`);
}
else
{
    console.log(`Mark's bmi ${markBmi} greater than John's bmi ${johnBmi}`);

}

 const fav=prompt('Your fav no?');
 console.log(fav);
 if(fav===23)
 console.log('cool number');
const hasDriversLicense=true;
const hasGoodVision=false;
console.log(hasDriversLicense || hasGoodVision);
const shdDrive=(hasDriversLicense && hasGoodVision);
if(shdDrive)
console.log(`able to drive`);
else
console.log('cannot drive');
//challenge 2
const dolphinTest1=97;
const dolphinTest2=112;
const dolphinTest3=101;
const koalasTest1=109;
const koalasTest2=95;
const koalasTest3=123;
const avgOfDolphin=(dolphinTest1+dolphinTest2+dolphinTest3)/3;
const avgOfKoalas=(koalasTest1+koalasTest2+koalasTest3);
if(avgOfDolphin>avgOfKoalas)
if(dolphinTest1>=100 && dolphinTest2>=100 && dolphinTest3>=100)
console.log(`Dolphins with ${avgOfDolphin} have won trophy`);
else if(avgOfDolphin===avgOfKoalas)
if(avgOfKoalas==avgOfDolphin)
{
    if(avgOfDolphin>=100 && avgOfKoalas>=100)
    console.log(`It's a tie `);
    else
    console.log(`No one won the trophy`);
}
else{
    if(avgOfKoalas>=100)
    console.log(`Koalas wih ${avgOfKoalas} have won the trophy`);
}