const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timer;

const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timer);
    timer = setInterval(function() {
      if (seconds > 0) {
        const res = seconds --;
        let h = seconds/3600 ^ 0,
            m = (seconds-h*3600)/60 ^ 0,
            s = seconds-h*3600-m*60,
            time = (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
        timerEl.textContent = time;
      } 
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});