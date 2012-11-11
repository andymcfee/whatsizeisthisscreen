var update = function(){
  $("#device-width").text(window.screen.width);
  $("#device-height").text(window.screen.height);

  $("#window-width").text($(document).width());
  $("#window-height").text($(document).height());
}

var vert_align = function (){
  var parentHeight = $('body').height();
  var childHeight = $('.vert-align').height();
  $('.vert-align').css('padding-top', (parentHeight - childHeight) / 2);
}

$(function(){
  update();
  vert_align();
  $(window).resize(function() {
    update();
    vert_align();
  });
});