

//Metodo que obtiene los datos para un cliente
function ObtenerCliente() {

  var idcliente =  $('#mscli').get(0).idcliente;
  
  if (idcliente > 0) {

    $.ajax({
      url: "../../Clientes/DameCliente",
      contentType: "application/x-www-form-urlencoded",
      dataType: 'json',
      data: { id: idcliente },
      type: "POST",
      cache: false,
      asyn: false,
      success: function (data) {
        if (data != null) {
          $('#mscli').get(0).datos = JSON.parse(data);
        }
        else {
          $('#mscli').get(0).hidden = true;
          $('#mscli').get(0).datos = [];
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $('#mscli').get(0).hidden = true;
        $('#mscli').get(0).datos = [];
      }
    });
  }

}



function CargarCliente(idcli) {
  $('#mscli').get(0).idcliente = idcli;
  ObtenerCliente();
}