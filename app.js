/*jshint esversion: 6 */

const items = document.querySelectorAll(".deadline-format h4");
const futureDate = new Date(2022, 0, 01);
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
    item.innerHTML = values[index];
  });
};

let countDown = setInterval(remainingTime, 1000);
