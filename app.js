const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const results = document.querySelector("#results");

const bmi = (weight/((height/100)*(height/100))).toFixed(2);
const conclusion = document.querySelector("#conclusion");


    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML= `Please Give a valid Height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML= `Please Give a valid Weight ${weight}`;
    }
    else{ 
        results.innerHTML= `<span>${bmi}</span>`   
    }

    if(bmi < 18.6){
        conclusion.innerHTML = `You are Under Weight`
    }
    else if(bmi <  24.9 ){
        conclusion.innerHTML = `You Weight is Normal`
    }
    else(bmi <  100);{
        conclusion.innerHTML = `You are Over Weight`
    }
})




