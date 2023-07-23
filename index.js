var visitorName, phoneNumber, email, address, passType, appointee, entryTime, exitTime, details;

var modalBox = document.querySelector('.modal-wrapper');

var form = document.getElementById("gatePassForm");



function formSubmitted(event) {

  event.preventDefault();

  visitorName = form.elements["name"].value;
  phoneNumber = form.elements["phoneNumber"].value;
  email = form.elements["email"].value;
  address = form.elements["address"].value;
  passType = form.elements["pass-type"].value;
  appointee = form.elements["appointee"].value;
  entryTime = form.elements["entryTime"].value;
  exitTime = form.elements["exitTime"].value;

  var fileInput = document.getElementById('fileInput');

  var file = fileInput.files[0];

  var formData = new FormData();
    formData.append("name", visitorName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("pass-type", passType);
    formData.append("appointee", appointee);
    formData.append("entryTime", entryTime);
    formData.append("exitTime", exitTime);
    formData.append('file', file);

    var xhr = new XMLHttpRequest();

    // Set up the AJAX request
    xhr.open('POST', 'process_form.php', true);


    fetch("process_form.php", {
        method: "POST",
        body: formData
      });

  details = "Name: " + visitorName + "\n" +
    "Phone Number: " + phoneNumber + "\n" +
    "Email: " + email + "\n" +
    "Address: " + address + "\n" +
    "Pass Type: " + passType + "\n" +
    "Appointee: " + appointee + "\n" +
    "Entry Time: " + entryTime + "\n" +
    "Exit Time: " + exitTime;

    modalBox.style.visibility = 'visible';
}

function closeModal(){
    modalBox.style.visibility = 'hidden';
    location.reload();
}



function printForm() {
    printJS({ printable: details, type: 'text' });
}

function pdfForm() {
    var pdfContent = [
        { text: "Name: " + visitorName },
        { text: "Phone Number: " + phoneNumber },
        { text: "Email: " + email },
        { text: "Address: " + address },
        { text: "Pass Type: " + passType },
        { text: "Appointee: " + appointee },
        { text: "Entry Time: " + entryTime },
        { text: "Exit Time: " + exitTime }
    ];

    var docDefinition = {
        content: pdfContent
    };

    var pdfDoc = pdfMake.createPdf(docDefinition);

    pdfDoc.download("Gate-Pass.pdf");
}
