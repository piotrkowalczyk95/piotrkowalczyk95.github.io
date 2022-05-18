$("#testForm").submit(function(event) {
    //alert("Hello");
    var text = JSON.stringify($(this.form).serializeArray());
  
    $("#testForm").show().val(text)[0].select();
    document.execCommand("copy");
    $("#testForm").hide();
    alert("Copied the form: " + text);
  
    return false
  
  })