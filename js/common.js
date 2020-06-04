$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../img/icons/nextarrow.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../img/icons/prevarrow.svg" alt=""></button>',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXNucnkiLCJNYXNvbnJ5IiwiaXRlbVNlbGVjdG9yIiwib3BlbmluZ0J0biIsImNsb3NpbmdCdG4iLCJzaWRlYmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsYUFBRixFQUFpQkMsS0FBakIsQ0FBdUI7QUFDckJDLFFBQU0sSUFEZTtBQUVyQkMsZ0JBQWMsQ0FGTztBQUdyQkMsa0JBQWdCLENBSEs7QUFJckJDLGFBQVcsNkdBSlU7QUFLckJDLGFBQVcsNkdBTFU7QUFNckJDLGNBQVksQ0FDVjtBQUNFQyxnQkFBWSxJQURkO0FBRUVDLGNBQVU7QUFGWixHQURVLEVBTVY7QUFDRUQsZ0JBQVksR0FEZDtBQUVFQyxjQUFVO0FBQ1JDLGNBQVE7QUFEQTtBQUZaLEdBTlU7QUFOUyxDQUF2Qjs7QUFxQkFWLEVBQUUsaUJBQUYsRUFBcUJDLEtBQXJCLENBQTJCO0FBQ3pCQyxRQUFNLElBRG1CO0FBRXpCQyxnQkFBYyxDQUZXO0FBR3pCQyxrQkFBZ0IsQ0FIUztBQUl6Qk0sVUFBUSxLQUppQjtBQUt6QkgsY0FBWSxDQUNWO0FBQ0VDLGdCQUFZLElBRGQ7QUFFRUMsY0FBVTtBQUZaLEdBRFUsRUFNVjtBQUNFRCxnQkFBWSxHQURkO0FBRUVDLGNBQVU7QUFDUkMsY0FBUTtBQURBO0FBRlosR0FOVTtBQUxhLENBQTNCOztBQXFCQSxDQUFDLFlBQVk7QUFDWCxNQUFJQyxPQUFPQyxVQUFQLENBQWtCLG9CQUFsQixFQUF3Q0MsT0FBNUMsRUFBcUQ7O0FBRW5ELFVBQU1DLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUNBLFVBQU1DLFFBQVEsSUFBSUMsT0FBSixDQUFZSixJQUFaLEVBQWtCO0FBQzlCO0FBQ0FLLG9CQUFjO0FBRmdCLEtBQWxCLENBQWQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBR0YsQ0FqQkQ7O0FBcUJFO0FBQ0E7QUFDQTs7QUFFQyxZQUFZO0FBQ1gsTUFBSUMsYUFBYUwsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLE1BQUlLLGFBQWFOLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsTUFBSU0sVUFBVVAsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUVBSSxhQUFXRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQy9DRCxZQUFRRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixjQUF0QjtBQUNELEdBRkQ7O0FBSUFKLGFBQVdFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDL0NELFlBQVFFLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0QsR0FGRDtBQUdELENBWkEsRUF6QkgiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLnRvcC1zbGlkZXInKS5zbGljayh7XHJcbiAgZG90czogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1hcnJvdyBzbGljay1uZXh0XCI+PGltZyBzcmM9XCIuLi9pbWcvaWNvbnMvbmV4dGFycm93LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1hcnJvdyBzbGljay1wcmV2XCI+PGltZyBzcmM9XCIuLi9pbWcvaWNvbnMvcHJldmFycm93LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2NDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSk7XHJcblxyXG4kKCcuY29tbWVudF9faW5uZXInKS5zbGljayh7XHJcbiAgZG90czogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2OHB4KVwiKS5tYXRjaGVzKSB7XHJcblxyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19pdGVtcycpO1xyXG4gICAgY29uc3QgbXNucnkgPSBuZXcgTWFzb25yeShlbGVtLCB7XHJcbiAgICAgIC8vIG9wdGlvbnNcclxuICAgICAgaXRlbVNlbGVjdG9yOiAnLm5ld3NfX2l0ZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19pdGVtcycpO1xyXG4gICAgLy8gY29uc3QgaXNvID0gbmV3IElzb3RvcGUoIGVsZW0sIHtcclxuICAgIC8vICAgLy8gb3B0aW9uc1xyXG4gICAgLy8gICBpdGVtU2VsZWN0b3I6ICcubmV3c19faXRlbScsXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuICAvLyBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXMgJiYgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTI0cHgpXCIpLm1hdGNoZXMpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCd0YWJsZXQnKVxyXG4gIC8vIH1cclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBvcGVuaW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpO1xyXG4gICAgbGV0IGNsb3NpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fY2xvc2UnKTtcclxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICBvcGVuaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2luZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX29wZW4nKTtcclxuICAgIH0pXHJcbiAgfSgpKVxyXG5cclxuXHJcblxyXG5cclxuIl19
