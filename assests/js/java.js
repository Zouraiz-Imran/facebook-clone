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

$(document).ready(function(){
  $('.post-see-more').click(function(){
      $(this).hide();
      $('.post-overflow-btn').addClass('active');
      $('.post-see-less').addClass('active');
  })
  
  $('.post-see-less').click(function(){
      $('.post-see-more').show();
      $('.post-overflow-btn').removeClass('active');
      $('.post-see-less').removeClass('active');
  })
})