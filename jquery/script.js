$(document).ready(function(){
    $('.tab').click(function(){
      $('.advanced-filter').slideToggle();
    });

    $('#select-all-checkbox').click(function () {
    $(':checkbox.checkItem').prop('checked', this.checked);
    });

    $('#select-all').click(function () {
    $(':checkbox.checkItem').prop('checked', this.checked);
    });

});
