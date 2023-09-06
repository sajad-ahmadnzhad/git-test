let $ = document;

let img = $.querySelector("img");
let nextimg = $.querySelector(".next");
let previmg = $.querySelector(".prev");
let slider = $.querySelector("#click_Run_slider");
let speedSeconds = $.querySelectorAll('.speedSeconds')


let flag = true
let indeximg = 0;
let Arraysrc = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
  "image/6.jpg",
  "image/7.jpg",
  "image/8.jpg",
  "image/9.jpg",
  "image/10.jpg",
  "image/11.jpg",
  "image/12.jpg",
];

function nextimg_Hndler() {
  indeximg++
  if (indeximg >= Arraysrc.length) indeximg = 0;
  img.setAttribute("src", Arraysrc[indeximg]);
  console.log(indeximg);
}

function previmg_Hndler() {
  indeximg--;
  if (indeximg < 0) indeximg = Arraysrc.length - 1;
  img.setAttribute("src", Arraysrc[indeximg]);
  console.log(indeximg);
}
window.addEventListener('keydown' , (e) => {
  if (e.code == 'ArrowLeft') previmg_Hndler()
  else if(e.code == "ArrowRight") nextimg_Hndler()
})
nextimg.addEventListener("click", nextimg_Hndler);

previmg.addEventListener("click", previmg_Hndler);
let timeInterval = 1000
  speedSeconds.forEach(item => {
    item.addEventListener('click' , (e) => {
      timeInterval = Number(e.target.dataset[''] + "000")
    })
  })

let interval = null
slider.addEventListener('click' , () => {
  if (flag) {
    interval = setInterval(() => nextimg_Hndler(), timeInterval)
    slider.innerHTML = 'متوقف کردن اجرای خودکار'
    flag = false
  }else{
    clearInterval(interval)
    slider.innerHTML = 'اجرای خودکار اسلایدر'
    flag = true
  }
})