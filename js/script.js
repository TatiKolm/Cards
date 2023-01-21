$('#start-game').on("click", function(){
    $('.card').addClass('hidden');
    $(this).attr("id", "finish-game").html("Finish");
});


$(function() {
    let shuffle = function(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
    }
  
    let values = [];
    for (let i = 1; i < 6; i++) {
      values.push(i);
      values.push(i);
    }
    shuffle(values);
    values.forEach(function(v) {
      $('.cards').append('<div class="card" data-pair="' + v + '"></div>');
    });
  })


$(document).on('click', '.cards div', function() {
    let display = $('.cards div').not('.hidden').not('.solved');
    let thisCell = $(this);
    
   
    if (thisCell.hasClass('solved') || display.index() === thisCell.index())
      return;
    
    if (display.length > 0) {
      display.addClass('hidden');
      
    }
  
    if (display.data('pair') === thisCell.data('pair')) {
      thisCell.removeClass('hidden');
      thisCell.addClass('solved');
      display.removeClass('hidden');
      display.addClass('solved');
    } else {
      thisCell.removeClass('hidden');
      setTimeout(function() {
        if (thisCell.hasClass('solved'))
          return;
        thisCell.addClass('hidden')
      }, 2000);
    }
    

    
    $('#finish-game').on('click', function(){
      $('.cards div').removeClass('hidden');
    })
    
    
    if ($('.cards div.solved').length === $('.cards div').length) {
      $('.modal-overlay').css('display', 'flex');
      $('#finish-game').attr("id", "#start-game").html("Start");
    }


  });

  