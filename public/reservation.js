function sendEmail() {
  let params = {
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    number: document.getElementById("people").value,
    fullName: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
  };
  emailjs.send("service_8oy9l56", "template_r3oud1m", params).then((res) => {
    alert(`Success! ${res.status}`);
  });
}
