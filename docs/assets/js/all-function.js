function closeCoronaBox() {
    document.getElementById("corona-box-id").style.display="none";
}

var btn = $('.totop');
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

