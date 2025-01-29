let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
  counter++; 
  counterValue.textContent = counter; 
});