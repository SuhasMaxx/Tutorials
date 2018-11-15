// 1 Making simple GET Ajax request -------------------------------------------

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Get text from API and set into a label with id "demo"
      document.getElementById("demo").innerHTML =
      this.responseText;
      this.getAllResponseHeaders(); // Retrieve heaader info from call
      this.getResponseHeader("Last-Modified"); // Get specific header info
    }
  };
  // @Params (Method, URL, Async)
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
  
// ------------------------------------------------------------------------------
  
// 2 AJAX call with callback function -------------------------------------------
  
  function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}

// ---------------------------------------------------------------------------------------

// -------------------- DISPATCH EVENT FROM IFRAME TO PARENT with Data --------------------
//in IFrame
var myCustomData = { foo: 'bar' }
var event = new CustomEvent('myEvent', { detail: myCustomData })
window.parent.document.dispatchEvent(event);

// in parent code
window.document.addEventListener('myEvent', handleEvent, false)
function handleEvent(e) {
  console.log(e.detail) // outputs: {foo: 'bar'}
}

// RegEx to validate email ------------------------------------------------------

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//-------------------------------------------------------------------------------

// javascript inbuilt form validations

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//---------------------------------------------------------------------------------
