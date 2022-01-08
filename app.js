/*jshint esversion: 6 */

const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
const futureDate = new Date(2023, 0, 01);
console.log(futureDate);

const remainingTime = () => {
  const date = new Date().getTime();
  const time = futureDate - date;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMin);
  let seconds = Math.floor((time % oneMin) / 1000);

  const values = [days, hours, minutes, seconds];
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (time < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h1>
    <img
      src="https://img.icons8.com/color/2x/confetti.png"
      alt=""
    />
    HAPPY NEW YEAR!!!
    <img
      src="https://img.icons8.com/color/2x/confetti.png"
      alt=""
    />
  </h1>`;
  }
};

let countDown = setInterval(remainingTime, 1000);

remainingTime();
