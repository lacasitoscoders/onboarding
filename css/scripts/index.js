// import jQuery https://code.jquery.com/jquery-3.3.1.min.js
var elementSelected = null;
var typeSelected = false;

$(document).on('click', '.listado-estados > img', function(){
  $('.listado-estados > img').each(function(){
    $(this).removeClass('active');
  })
  $(this).addClass('active');
  elementSelected = $(this);
  typeSelected = false;
});

$(document).on('input', '#text-src', function(){
  $('.listado-estados > img').each(function(){
    $(this).removeClass('active');
  })
  elementSelected = $(this);
  typeSelected = true;
})

$(document).on('click', '#btn-confirmar', function(){
  $('.selector-estados').hide();
  if(typeSelected == true){
    $('.visualizador-estado > img').attr('src', elementSelected.val());
  }
  else{
    $('.visualizador-estado > img').attr('src', elementSelected.attr('src'));
  }
  $('.visualizador-estado').fadeIn('high');
})

$(document).on('click', '#button-other', function(){
  $('.visualizador-estado').hide();
  $('.selector-estados').fadeIn('high');
})