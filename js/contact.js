function contact() {
    document.getElementById("one").style.background = "#FC600A";
    document.getElementById("two").style.background = "#0B1654";
    document.getElementById("three").style.background = "#0B1654";
    document.getElementById("two").style.boxShadow = "none";
    document.getElementById("three").style.boxShadow = "none";
    document.getElementById("info").style.display = "flex";
    document.getElementById("map").style.display = "none";
    document.getElementById("fbs").style.display = "none";
}

function map() {
    document.getElementById("two").style.background = "#FC600A";
    document.getElementById("one").style.background = "#0B1654";
    document.getElementById("three").style.background = "#0B1654";
    document.getElementById("one").style.boxShadow = "none";
    document.getElementById("three").style.boxShadow = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("map").style.display = "flex";
    document.getElementById("fbs").style.display = "none";
}

function fb() {
    document.getElementById("three").style.background = "#FC600A";
    document.getElementById("two").style.background = "#0B1654";
    document.getElementById("one").style.background = "#0B1654";
    document.getElementById("two").style.boxShadow = "none";
    document.getElementById("one").style.boxShadow = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("fbs").style.display = "flex";
}

function sendEmail(){
    Email.send({
        SecureToken : "5aeef464-f58b-4456-8088-5b151af017f0", 
        To: 'bagahanz23@gmail.com',
        From : 'bagahanz23@gmail.com',
        Subject : "Inquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Contact Number: " + document.getElementById("number").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
  }