//card-block
const myAtropos = Atropos({
  el: '.card-block-atropos-js',
  activeOffset: 40,
  shadowScale: 1.05,
  alwaysActive: true,

  rotate: true,
  rotateXMax: 50,
  rotateYMax: 50,
  activeOffset: 30,
  highlight: true,
});

const cardBlock = document.querySelector('.card-block__swiper');

const cardBlockswiper = new Swiper(cardBlock, {
  navigation: {
    nextEl: '.card-block__btn-next',
    prevEl: '.card-block__btn-prev',
  },
});

//btn-sound
const slideContent = document.querySelectorAll('.card-block__slide');

const slideChangeFunc = () => {
  cardBlockswiper.on('slideChange', () => {
    const sound = document.querySelectorAll('.card-block__audio');
    sound.forEach((item) => {
      item.classList.remove('play');
      item.pause();
    });
  });
};

slideChangeFunc();

const soundBtnFunc = () => {
  slideContent.forEach((item) => {
    const soundBtn = item.querySelector('.card-block__btn-sound');
    soundBtn.addEventListener('click', () => {
      const sound = item.querySelector('.card-block__audio');
      sound.classList.add('play');
      sound.play();

      let soundTime = Math.floor(sound.duration * 1000);
      // console.log(soundTime);

      // setTimeout(() => {
      //   cardBlockswiper.slideNext();
      // }, soundTime);
    });
  });
};

soundBtnFunc();
