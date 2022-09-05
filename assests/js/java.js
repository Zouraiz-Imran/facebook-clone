$(document).ready(function(){
  $('.see-more').click(function(){
      $(this).hide();
      $('.overflow-btn').addClass('active');
      $('.see-less').addClass('active');
  })
  
  $('.see-less').click(function(){
      $('.see-more').show();
      $('.overflow-btn').removeClass('active');
      $('.see-less').removeClass('active');
  })
})