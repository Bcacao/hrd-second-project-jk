const $age = document.querySelector('.age');
const $movieTitle = document.querySelector('.title p');
const $day = document.querySelector('.date p');
const $seat = document.querySelector('.seat p');
const $headCount = document.querySelector('.head-count p');
const $qrcode = document.querySelector('.qrcode-img');
const $secretBox = document.querySelectorAll('.secret-box li');
const $secretBoxLi = [...$secretBox];


// console.log($secretBoxLi[1]);
// $age.innerHTML = '나이제한';
// $movieTitle.innerHTML = '제목<br><span>서브타이틀</span>';
// $day.innerHTML = 'cinemabox 날짜<br><span>시간</span>';
// $seat.innerHTML = '스크린타입<br><span>좌석</span>';
// $headCount.innerHTML = '인원';
// $qrcode.src = '../image/소울메이트.png';



 for(let i = 0; i < $secretBoxLi.length; i++){
     $secretBoxLi[i].style.opacity= '0';
     $secretBoxLi[i].style.transition = 'opacity '+ i +'s ease-out';
     $secretBoxLi[i].style.transitionDelay = i-0.9+'s';
 }