const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector(' input');

// .search 클래스 전체를 클릭하면 input 늘어지게
searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

// focus의 반대는 blur

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


// badge 요소 스크롤시 숨기기 or 보이기
//css 선택자 불러오기
const badgeEl = document.querySelector('header .badges');

//_.throttle() : _.throttle(함수, 시간)을 넣어 스크롤하면 스크롤 한 횟수대로 부하가 일어나지 않게 걸어줌
//라이브러리 가져와야 함 (lodash)
window.addEventListener('scroll', _.throttle(function(){
console.log(window.scrollY); // 스크롤의 높이 얻기

//gsap 이벤트 사용시 라이브러리 코드 가져와야 함(gsap cdn)
//스크롤 기준이 500보다 크다면
if(window.scrollY > 500) {
//badge 숨기기
gsap.to(badgeEl, .6, {
  opacity: 0,
  display: 'none'
});
}else {
  //badge 보이기
  gsap.to(badgeEl, .6, {
    opacity: 1,
    display: 'block'
  });
}
},300));

