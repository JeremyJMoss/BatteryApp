const level = document.getElementById("level");
const battCont = document.querySelector(".batteryContainer");

navigator.getBattery().then((battery) => {
  let batteryPerc = 100;
  level.innerHTML = `Remaining ${batteryPerc}%`;
  let isCharging = battery.charging;

  if (isCharging) {
    battCont.innerHTML = `<img src="https://img.icons8.com/color/144/000000/charge-battery--v2.png"/>`;
  } else if (batteryPerc < 25) {
    battCont.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="90" height="90"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h17.2v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g></g></svg>`;
  } else if (batteryPerc < 50) {
    battCont.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="90" height="90"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g transform="translate(4.988,4.988) scale(0.942,0.942)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g fill="#000000" stroke="#cccccc" stroke-width="10" stroke-linejoin="round"><path d="M137.6,40.13333c9.43116,0 17.2,7.76884 17.2,17.2v51.6c0,9.43116 -7.76884,17.2 -17.2,17.2h-114.66667c-9.43116,0 -17.2,-7.76884 -17.2,-17.2v-51.6c0,-9.43116 7.76884,-17.2 17.2,-17.2zM17.2,57.33333v51.6c0,3.23951 2.49383,5.73333 5.73333,5.73333h114.66667c3.23951,0 5.73333,-2.49383 5.73333,-5.73333v-51.6c0,-3.23951 -2.49383,-5.73333 -5.73333,-5.73333h-114.66667c-3.23951,0 -5.73333,2.49383 -5.73333,5.73333zM80.26667,63.06667v40.13333h-51.6v-40.13333zM166.26667,68.8c3.1648,0 5.73333,2.56853 5.73333,5.73333v17.2c0,3.1648 -2.56853,5.73333 -5.73333,5.73333h-5.73333v-28.66667z"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><g fill="#f1c40f" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h51.6v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path></g></g></svg>`;
  } else {
    battCont.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><g fill="#2ecc71"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h103.2v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g></g></g></svg>`;
  }
});
