AOS.init({
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
});

gsap.registerPlugin(ScrollTrigger)


const fixedTopBtn = document.querySelector('.fixedTop')

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let body = document.body;
  
    console.log(scroll);
  
    if (body.classList.contains('full')) {
      // 'full' 클래스가 body에 있으면 On 클래스를 제거
      fixedTopBtn.classList.remove('On');
    } else {
      // 'full' 클래스가 없으면 스크롤 값에 따라 On 클래스를 추가하거나 제거
      if (scroll > 10) {
        fixedTopBtn.classList.add('On');
      } else {
        fixedTopBtn.classList.remove('On');
      }
    }
  });

fixedTopBtn.addEventListener('click', (e) => {
  e.preventDefault()

  window.scrollTo({
    top: 1,
    behavior: 'smooth'
  })

})






