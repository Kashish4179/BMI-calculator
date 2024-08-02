window.onload = () => {
   const button = document.querySelector('#btn');
   button.addEventListener('click',calculateBmi)
}

function calculateBmi() {
    const gender = document.querySelector('input[name="gender"]:checked'); 
    const age = document.querySelector('#age').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!gender) {
      result.innerText = 'Please select your gender.';
      return;
  }

  if (!age || isNaN(age) || age <= 0) {
    result.innerText = 'Please provide your age.';
    return;
}
    if(!height || isNaN(height) || height < 0){
       result.innerText ="Please provide a valid height";
       return;
    }
    
    else if (!weight || isNaN(weight) || weight<0){
       result.innerText ="Please provide a valid weight";
       return;
    }

    const  bmi =(weight/ ((height* height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerText =`Under Weight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerText=`Normal: ${bmi}`; 
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerText=`Over weight: ${bmi}`; 
    } else if (bmi >= 30 && bmi < 34.9) {
      result.innerText=`Obesity (class I): ${bmi}`; 
    } else if (bmi >= 35.5 && bmi < 39.9) {
      result.innerText=`Obesity (class II): ${bmi}`; 
    } else{
      result.innerText=`Extreme Obesity: ${bmi}`; 
    }
}