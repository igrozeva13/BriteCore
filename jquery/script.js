$(document).ready(function(){
    $(".tab").click(function(){
      $(".advanced-filter").slideToggle();
    });

    $('.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

});
