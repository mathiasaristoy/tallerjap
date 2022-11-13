function saveProfile() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const name = document.getElementById('inputName');
  const lastname = document.getElementById('inputLastname');
  const email = document.getElementById('inputEmail');
  const middleName = document.getElementById('inputMiddleName');
  const secondLastName = document.getElementById('inputeSecondLastname');
  const phone = document.getElementById('inputPhone');
  
  

  if (name.value === "") {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

  if (lastname.value === "") {
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.remove("is-invalid");
  }

  if (email.value === "" || !regex.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }

  if (email.value === ""  || !regex.test(email.value) || lastname.value === "" || name.value === "") return;
  localStorage.setItem("email", email.value);
  localStorage.setItem("name", name.value);
  localStorage.setItem("lastname", lastname.value);
  localStorage.setItem("middlename", middleName.value);
  localStorage.setItem("secondlastname", secondLastName.value);
  localStorage.setItem("phone", phone.value);

  return true
}



document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveProfile").addEventListener("click", () => {
   if (saveProfile()===true){
      location.href = "my-profile.html"}
    
  });
});

