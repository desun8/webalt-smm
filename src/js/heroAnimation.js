// import TimelineLite from 'gsap/TimelineLite';
import { TweenLite, TimelineLite, Power3, RoughEase } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const $ = document.querySelectorAll.bind(document);
  const tl = new TimelineLite();

  const line = $('#js-heroLine');
  const titleMain = $('#js-heroTitleMain');
  const titleSec = $('#js-heroTitleSec');
  const text = $('#js-heroText');
  const btns = $('#js-heroBtns');
  const circle = $('#js-heroCircle');
  const phone = $('#js-heroPhone');

  TweenLite.from(phone, 2, {
    y: 10,
    autoAlpha: 0,
    delay: 1,
    ease: Power3.easeInOut,
  });

  tl
    .from(circle, 1, {
      autoAlpha: 0,
      delay: 1,
      ease: Power3.easeInOut,
    })
    .from(line, 2, {
      height: 0,
      ease: Power3.easeInOut,
    })
    .from(titleMain, 1, {
      x: -100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(titleSec, 1, {
      x: -100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(text, 1, {
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(btns, 1, {
      y: 100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    });
});
