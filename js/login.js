$('#submit-btn').on('click', function(e){
  // input창에 들어있는 값이 없을 경우에 alert창을 띄운다
  let idbox = $('#id').val();
  let pwbox = $('#pw').val();
  console.log(idbox,pwbox);
  if (idbox=='' && pwbox==''){
    $('#noid').show();
    $('#nopw').show();
    $('#sixpw').hide();
    e.preventDefault();
  }else if(pwbox.length<6 && pwbox.length>0){
    if(idbox==''){
      $('#noid').show();
    }else if(idbox!=''){
      $('#noid').hide();
    }
    $('#nopw').hide();
    $('#sixpw').show();
    e.preventDefault();
  }else if(idbox==''){
    $('#noid').show();
    $('#nopw').hide();
    $('#sixpw').hide();
    e.preventDefault();
  }else if(pwbox==''){
    $('#nopw').show();
    $('#noid').hide();
    $('#sixpw').hide();
    e.preventDefault();
  }
});
