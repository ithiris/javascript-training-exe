

const rangeOutput = document.querySelector('.range-output');
    
const rangeInput = document.querySelector('.range-input');

const slider = document.querySelector('#myProgressBar');


function rangeSlider(value) {
  rangeOutput.textContent = value;

  
}

function onInputRangeInput() {
  const value = rangeInput.value;

  rangeSlider(value);
 
}

rangeInput.addEventListener('input', onInputRangeInput);

rangeSlider(20);

