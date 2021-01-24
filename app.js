// // For the sticky ness of the navbar
$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 2) {
      $(".navbar").addClass(".sticky");
    }
  });
});
// not working its 17 min in the video
console.log("Working");
