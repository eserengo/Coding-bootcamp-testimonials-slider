(function () {

  const createContent = () => {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<main class="main rel"></main>`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<img class='icon prev selectable' src='src/images/icon-prev.svg' alt='icon prev' />`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<img class='icon next selectable' src='src/images/icon-next.svg' alt='icon next' />`);
    document.querySelector('body').insertAdjacentHTML('beforeend', `<footer class="attribution">Challenge by <a class="anchor" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a class="anchor" href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.</footer>`);

    class Card {
      constructor(num, quote, name, pos, src) {
        this.num = num;
        this.quote = quote;
        this.name = name;
        this.pos = pos;
        this.src = src;
      }
      createCard() {
        return document.querySelector('.main').insertAdjacentHTML('beforeend',
          `<section class='card ${this.num}'><p class='quote'>${this.quote}</p><b class='name'>${this.name}</b><p class='pos'>${this.pos}</p><img class='hero' src=${this.src} alt='hero image' /></section>`);
      }
    }

    document.querySelectorAll('.icon').forEach(item => {
      item.addEventListener('click', () => {
        if (!document.querySelector('.card')) {
          const card1 = new Card(`one`, `“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”`, `Tanya Sinclair`, `UX Engineer`, `src/images/image-tanya.jpg`);
          card1.createCard();
          displayOnResize();
        } else {
          if (document.querySelector('.one') !== null) {
            document.querySelector('.one').remove();
            const card2 = new Card(`two`, `“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`, `John Tarkpor`, `Junior Front-end Developer`, `src/images/image-john.jpg`);
            card2.createCard();
            displayOnResize();
          } else {
            document.querySelector('.two').remove();
            const card1 = new Card(`one`, `“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”`, `Tanya Sinclair`, `UX Engineer`, `src/images/image-tanya.jpg`);
            card1.createCard();
            displayOnResize();
          }
        }
      })
    })
  }
  
  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      if (document.querySelector('.card') !== null) {
        document.querySelector('.card').classList.add('flex-col');
        document.querySelector('.card').classList.add('center');
      }
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      if (document.querySelector('.card') !== null) {
        document.querySelector('.card').classList.remove('flex-col');
        document.querySelector('.card').classList.remove('center');
      }
    }
  }

  // ----- WINDOW ON RESIZE FUNCTION WITH TIMEOUT DEBOUNCING TECHNIQUE ------

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  // ------ FUNCTIONS TO EXECUTE AFTER THE CONTENT HAS BEEN INJECTED

  window.addEventListener('DOMContentLoaded', () => {
    // FUNCTIONS
    createContent();
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();