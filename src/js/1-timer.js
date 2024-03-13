import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate = null;
let timeInterval = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    timeInterval = userSelectedD - options.defaultDate;
    if (timeInterval < 1) {
      alert`Please choose a date in the future`;
    }
  },
};
const fp = flatpickr('input#datetime-picker', options);

const btn = document.querySelector(`#data-start`);
btn.addEventListener(`click`, hadlerBtn);
function hadlerBtn(event) {
  event.preventDefault();
}

console.log(userSelectedDate);
