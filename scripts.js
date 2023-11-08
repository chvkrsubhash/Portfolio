$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    swipeToSlide: true,
    touchThreshold: 5000
  });
  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    touchThreshold: 5000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  function Timeline(selector, config) {
    // ...
  
    this.init = function() {
      this.el.addClass('is-loading')
      this.el.addClass('is-init')
      this.el.each(function() {
        this.offsetHeight
      })
      this.el.removeClass('is-loading')
      this.el.addClass('is-init'); // Add this line to apply the animation class
      this.animation()
      this.trackHeight();
  
      let self = this;
      $(document).scroll(function() {
        self.animation();
      });
      $(document).resize(function() {
        self.trackHeight();
      });
    }
  
    // ...
  }
  