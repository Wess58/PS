function sendEmail() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["EMail"];


  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf("@", 0) < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  return true;
}
