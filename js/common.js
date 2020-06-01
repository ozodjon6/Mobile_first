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

  const elem = document.querySelector('.news__items');
  const iso = new Isotope(elem, {
    // options
    itemSelector: '.news__item'
  });
})(function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwiZWxlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzbyIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJvcGVuaW5nQnRuIiwiY2xvc2luZ0J0biIsInNpZGViYXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxhQUFGLEVBQWlCQyxLQUFqQixDQUF1QjtBQUNuQkMsUUFBTSxJQURhO0FBRW5CQyxnQkFBYyxDQUZLO0FBR25CQyxrQkFBZ0IsQ0FIRztBQUluQkMsYUFBVyw2R0FKUTtBQUtuQkMsYUFBVyw2R0FMUTtBQU1uQkMsY0FBWSxDQUNWO0FBQ0VDLGdCQUFZLElBRGQ7QUFFRUMsY0FBVTtBQUZaLEdBRFUsRUFNVjtBQUNFRCxnQkFBWSxHQURkO0FBRUVDLGNBQVU7QUFDUkMsY0FBUTtBQURBO0FBRlosR0FOVTtBQU5PLENBQXZCOztBQXFCRVYsRUFBRSxpQkFBRixFQUFxQkMsS0FBckIsQ0FBMkI7QUFDekJDLFFBQU0sSUFEbUI7QUFFekJDLGdCQUFjLENBRlc7QUFHekJDLGtCQUFnQixDQUhTO0FBSXpCRyxjQUFZLENBQ1Y7QUFDRUMsZ0JBQVksSUFEZDtBQUVFQyxjQUFVO0FBRlosR0FEVSxFQU1WO0FBQ0VELGdCQUFZLEdBRGQ7QUFFRUMsY0FBVTtBQUNSQyxjQUFRO0FBREE7QUFGWixHQU5VO0FBSmEsQ0FBM0I7O0FBb0JBLENBQUMsWUFBWTs7QUFFWCxRQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxRQUFNQyxNQUFNLElBQUlDLE9BQUosQ0FBYUosSUFBYixFQUFtQjtBQUM3QjtBQUNBSyxrQkFBYztBQUZlLEdBQW5CLENBQVo7QUFLRCxDQVJELEVBVUMsWUFBWTtBQUNYLE1BQUlDLGFBQWFMLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxNQUFJSyxhQUFhTixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBLE1BQUlNLFVBQVVQLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFFRUksYUFBV0csZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtBQUMvQ0QsWUFBUUUsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsY0FBdEI7QUFDRCxHQUZEOztBQUlBSixhQUFXRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQy9DRCxZQUFRRSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixjQUF6QjtBQUNELEdBRkQ7QUFHSCxDQVpBLEVBVkQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLnRvcC1zbGlkZXInKS5zbGljayh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLWFycm93IHNsaWNrLW5leHRcIj48aW1nIHNyYz1cIi4uL2ltZy9pY29ucy9uZXh0YXJyb3cuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stYXJyb3cgc2xpY2stcHJldlwiPjxpbWcgc3JjPVwiLi4vaW1nL2ljb25zL3ByZXZhcnJvdy5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbW1lbnRfX2lubmVyJykuc2xpY2soe1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxuICBcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICBcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbXMnKTtcclxuICAgIGNvbnN0IGlzbyA9IG5ldyBJc290b3BlKCBlbGVtLCB7XHJcbiAgICAgIC8vIG9wdGlvbnNcclxuICAgICAgaXRlbVNlbGVjdG9yOiAnLm5ld3NfX2l0ZW0nLFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgfSlcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBvcGVuaW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpO1xyXG4gICAgbGV0IGNsb3NpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fY2xvc2UnKTtcclxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICBcclxuICAgICAgb3BlbmluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfb3BlbicpO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xvc2luZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJfb3BlbicpO1xyXG4gICAgICB9KVxyXG4gIH0oKSlcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==