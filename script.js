let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge

const prompt=require("prompt-sync")();
let mark=prompt("please enter your marks");
let marks=mark;
function grade(){ 

  if (marks <=39)
   { 
    console.log(" Your grade is E");
   }
     else if (marks >=40 || marks <=49)
{
console.log("Your grade is D");
}
else if (marks >=50 || marks <=59)
{
console.log(" Your grade is C");
}
else if (marks >=60 || marks <=79)
{
console.log(" Your grade is B");
}
else if (marks >=80 || marks <=100)
{
console.log(" Your grade is A");
}
}

finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge


const prompt=require("prompt-sync")();
let speed=prompt("Enter speed of the car");
function points(){
    if(speed < 70){
        console.log("Ok")
    }
    else if(speed > 70){
        const penaltypoints=((speed-70)/5)
        console.log(Math.ceil(penaltypoints));
        if(penaltypoints >=12){
            console.log('License suspended')
        }
    }
}

finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge


const prompt=require("prompt-sync")();
let pay=prompt("please enter your grosSalary")
let grosSalary=pay;
function SalaryPayable(){
let paye;
let nssf =400;
let nhif;
let deductions;

if (grosSalary<24000){
    paye=(grosSalary*0.1)
}
else if(grosSalary< 32332 && grosSalary >24000){
    paye= (grosSalary*0.25)
}
else if (grosSalary>32333){
    paye=(grosSalary*0.3)
}
else if (grosSalary< 6000){
        nhif=150;
    }
else if(grosSalary>=6000 && grosSalary<8000){
    nhif=300 ;   
}
else if(grosSalary>=8000 && grosSalary<12000){
    nhif= 400;
}
else if(grosSalary>=12000 && grosSalary<15000){
    nhif=500;
}
else if( grosSalary>=15000 && grosSalary<20000){
    nhif=600;
}
else if(grosSalary>=20000 && grosSalary<25000){
        nhif=700;
    }
else if(grosSalary>=25000 && grosSalary <30000){
    nhif=850;
}
deductions= (paye+nhif+nssf)

const netSalary=(grosSalary-deductions)
        console.log(netSalary);
}

SalaryPayable()

finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})