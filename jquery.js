$("#button").on("click", function(event) {
    var serialized = $(this.form).serializeArray()
    var text = serialized.map(function(field) {
      return field.name+": "+field.value
    }).join("\n")
  
    $("#copy").show().val(text)[0].select();
    document.execCommand("copy");
    $("#copy").hide();
    alert("Odpowiedzi skopiowane!");
  
  })