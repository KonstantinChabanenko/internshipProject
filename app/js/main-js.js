$('document').ready(function(){
  $('.drop-down-search').hide();
  $('.search-box').on('click', function(){
    $('.drop-down-search').slideDown(1000);
  });
  $('.search-box').click(function(e) {
    e.stopPropagation();
  });
  $('.drop-down-search').click(function(e) {
    e.stopPropagation();
  });
  $('body').click(function(){
    $('.drop-down-search').hide();
    $('.search-box').val('');
  });
});
