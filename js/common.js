$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./img/icons/nextarrow.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./img/icons/prevarrow.svg" alt=""></button>',
  responsive: [{
    breakpoint: 1024,
    settings: {}
  }, {
    breakpoint: 640,
    settings: {
      arrows: false
    }
  }]
});

$('.comment__inner').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {}
  }, {
    breakpoint: 640,
    settings: {
      arrows: false
    }
  }]
});

(function () {
  if (window.matchMedia("(min-width: 768px)").matches) {

    const elem = document.querySelector('.news__items');
    const msnry = new Masonry(elem, {
      // options
      itemSelector: '.news__item'
    });

    // const elem = document.querySelector('.news__items');
    // const iso = new Isotope( elem, {
    //   // options
    //   itemSelector: '.news__item',
    // });
  }
})(

// if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(max-width: 1124px)").matches) {
//   console.log('tablet')
// }

function () {
  let openingBtn = document.querySelector('.menu__btn');
  let closingBtn = document.querySelector('.sidebar__close');
  let sidebar = document.querySelector('.sidebar');

  openingBtn.addEventListener('click', function () {
    sidebar.classList.add('sidebar_open');
  });

  closingBtn.addEventListener('click', function () {
    sidebar.classList.remove('sidebar_open');
  });
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXNucnkiLCJNYXNvbnJ5IiwiaXRlbVNlbGVjdG9yIiwib3BlbmluZ0J0biIsImNsb3NpbmdCdG4iLCJzaWRlYmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsYUFBRixFQUFpQkMsS0FBakIsQ0FBdUI7QUFDckJDLFFBQU0sSUFEZTtBQUVyQkMsZ0JBQWMsQ0FGTztBQUdyQkMsa0JBQWdCLENBSEs7QUFJckJDLGFBQVcsNEdBSlU7QUFLckJDLGFBQVcsNEdBTFU7QUFNckJDLGNBQVksQ0FDVjtBQUNFQyxnQkFBWSxJQURkO0FBRUVDLGNBQVU7QUFGWixHQURVLEVBTVY7QUFDRUQsZ0JBQVksR0FEZDtBQUVFQyxjQUFVO0FBQ1JDLGNBQVE7QUFEQTtBQUZaLEdBTlU7QUFOUyxDQUF2Qjs7QUFxQkFWLEVBQUUsaUJBQUYsRUFBcUJDLEtBQXJCLENBQTJCO0FBQ3pCQyxRQUFNLElBRG1CO0FBRXpCQyxnQkFBYyxDQUZXO0FBR3pCQyxrQkFBZ0IsQ0FIUztBQUl6Qk0sVUFBUSxLQUppQjtBQUt6QkgsY0FBWSxDQUNWO0FBQ0VDLGdCQUFZLElBRGQ7QUFFRUMsY0FBVTtBQUZaLEdBRFUsRUFNVjtBQUNFRCxnQkFBWSxHQURkO0FBRUVDLGNBQVU7QUFDUkMsY0FBUTtBQURBO0FBRlosR0FOVTtBQUxhLENBQTNCOztBQXFCQSxDQUFDLFlBQVk7QUFDWCxNQUFJQyxPQUFPQyxVQUFQLENBQWtCLG9CQUFsQixFQUF3Q0MsT0FBNUMsRUFBcUQ7O0FBRW5ELFVBQU1DLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUNBLFVBQU1DLFFBQVEsSUFBSUMsT0FBSixDQUFZSixJQUFaLEVBQWtCO0FBQzlCO0FBQ0FLLG9CQUFjO0FBRmdCLEtBQWxCLENBQWQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBR0YsQ0FqQkQ7O0FBcUJFO0FBQ0E7QUFDQTs7QUFFQyxZQUFZO0FBQ1gsTUFBSUMsYUFBYUwsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLE1BQUlLLGFBQWFOLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsTUFBSU0sVUFBVVAsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUVBSSxhQUFXRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQy9DRCxZQUFRRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixjQUF0QjtBQUNELEdBRkQ7O0FBSUFKLGFBQVdFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDL0NELFlBQVFFLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0QsR0FGRDtBQUdELENBWkEsRUF6QkgiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLnRvcC1zbGlkZXInKS5zbGljayh7XHJcbiAgZG90czogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1hcnJvdyBzbGljay1uZXh0XCI+PGltZyBzcmM9XCIuL2ltZy9pY29ucy9uZXh0YXJyb3cuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLWFycm93IHNsaWNrLXByZXZcIj48aW1nIHNyYz1cIi4vaW1nL2ljb25zL3ByZXZhcnJvdy5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjQwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pO1xyXG5cclxuJCgnLmNvbW1lbnRfX2lubmVyJykuc2xpY2soe1xyXG4gIGRvdHM6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2NDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA3NjhweClcIikubWF0Y2hlcykge1xyXG5cclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbXMnKTtcclxuICAgIGNvbnN0IG1zbnJ5ID0gbmV3IE1hc29ucnkoZWxlbSwge1xyXG4gICAgICAvLyBvcHRpb25zXHJcbiAgICAgIGl0ZW1TZWxlY3RvcjogJy5uZXdzX19pdGVtJyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbXMnKTtcclxuICAgIC8vIGNvbnN0IGlzbyA9IG5ldyBJc290b3BlKCBlbGVtLCB7XHJcbiAgICAvLyAgIC8vIG9wdGlvbnNcclxuICAgIC8vICAgaXRlbVNlbGVjdG9yOiAnLm5ld3NfX2l0ZW0nLFxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiAgLy8gaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzICYmIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTEyNHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygndGFibGV0JylcclxuICAvLyB9XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgb3BlbmluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKTtcclxuICAgIGxldCBjbG9zaW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX2Nsb3NlJyk7XHJcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgb3BlbmluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX29wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhcl9vcGVuJyk7XHJcbiAgICB9KVxyXG4gIH0oKSlcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
