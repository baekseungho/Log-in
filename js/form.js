// document.getElementById('login-btn').addEventListener('click', function(){
//   //#login-btn을 클릭했을 때 .overlay한테 .open-modal이라는 클래스를 추가
//   // 1. .overlay 클래스 찾기
//   document.querySelector('.overlay').classList.add('open-modal');
// });

// document.getElementById('close-btn').addEventListener('click', function(){
//   document.querySelector('.overlay').classList.remove('open-modal');
// })

// $ = document.querySelector
// on = addEventListenter
// addClass = classList.add
$('#login-btn').on('click', function(){
  $('.overlay').addClass('open-modal');
});

$('#close-btn').on('click', function(){
  $('.overlay').removeClass('open-modal');
});