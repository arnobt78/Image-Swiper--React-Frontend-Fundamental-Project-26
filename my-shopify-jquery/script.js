$(document).ready(function () {
  // Initialize Swiper
  var swiper = new Swiper(".swiper", {
    // Pagination settings
    pagination: {
      clickable: false, // Disable clickable pagination bullets
      el: ".swiper-pagination", // Pagination element
    },
    // Navigation settings
    navigation: {
      nextEl: ".swiper-button-next", // Next button element
      prevEl: ".swiper-button-prev", // Previous button element
    },
    // Swiper events
    on: {
      init: function () {
        // Scope the navigation button selection to the current Swiper instance
        var $pagination = $(this.el).find(".swiper-pagination");
        var $nextButton = $(this.el).find(".swiper-button-next");
        var $prevButton = $(this.el).find(".swiper-button-prev");

        // Prepend the prev button and append the next button to the pagination container
        $pagination.prepend($prevButton);
        $pagination.append($nextButton);
      },
    },
  });
});
