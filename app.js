// # 1
// const removableBtn = document.querySelector('#removable-btn');
// if(removableBtn){
//   removableBtn.addEventListener('click', () => {
//     removableBtn.remove();
//   });
// }

// # 2
// const imgTag = document.createElement('img');
// imgTag.src = 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
// document.body.append(imgTag);

// # 3
// const users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg"
//   },
// ];
//
// const renderUsers = () => {
//   const userListContainer = document.querySelector('#user-list');
//   // let userNodeString = '';
//   const userNodeStrings = users.map(user => {
//      return `<div class="user-item">
//       <span class="user-id">${user.id}</span>
//       <span>${user.first_name} ${user.last_name}</span>
//       <span>${user.email}</span>
//       <span><img src="${user.avatar}" /></span>
//       <button class="user-remove-btn">Remove</button>
//       <button class="user-info-btn">Info</button>
//       <span class="user-info">${user.email}</span>
//       </div>`;
//   });
//   userListContainer.innerHTML = userNodeStrings.join('');
//   initUserListActions();
//
//   // console.log(users, userNodeStrings);
// }
//
// renderUsers();
//
// function initUserListActions(){
//   const userRemoveBtns = document.querySelectorAll('.user-remove-btn');
//   const userInfoBtns = document.querySelectorAll('.user-info-btn');
//
//   console.log('userRemoveBtns', userRemoveBtns);
//
//   userRemoveBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       btn.parentNode.remove()
//     })
//   })
//
//   userInfoBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const userInfo = btn.parentNode.querySelector('.user-info');
//       if(userInfo){
//         userInfo.classList.toggle('visible');
//       }
//     })
//   })
// }

//# 6

// const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 90, 43];
//
// function birthdayCakeCandles(candles){
//   const max = Math.max(...candles);
//   const maxCount = candles.filter(num => num === max).length;
//   console.log(candles, max, maxCount);
//   return maxCount;
// }
//
// birthdayCakeCandles(candles);

// Events
// const grand = document.querySelector('.grand-parent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
// grand.addEventListener('click', () => {
//   console.log('Grand clicked');
// }, { capture: true})
// grand.addEventListener('click', () => {
//   console.log('Grand clicked');
// })
// parent.addEventListener('click', e => {
//   e.stopPropagation();
//   console.log('parent clicked');
// })
// child.addEventListener('click', e => {
//   e.stopPropagation();
//   console.log('child clicked');
// })

// async functions
// const eventLoop = [];
// function handleTimeOut(){
//   console.log('handleTimeOut called');
// }
// setTimeout(() => {
//
// })
// const timeOutId = setTimeout(handleTimeOut, 5000);
// setTimeout(() => {
//   clearTimeout(timeOutId);
// }, 6000);

// function handleInterval(){
//   console.log('handleInterval called');
// }

// const intervalID = setInterval(handleInterval, 2000);
// clearInterval(intervalID);
// console.log('timeOutId', timeOutId);
//
// function myFunc(callbackFn) {
//   callbackFn();
// }
// myFunc(() => {
//   console.log('Called from callback');
// })

// Slider
const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');
let activeIndex = 0;

initSlider();
function initSlider(){
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);
  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowRight'){
      showNextSlide();
    }
  })
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

function showPrevSlide(){
  activeIndex = activeIndex - 1;
  if(activeIndex < 0){
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
}
