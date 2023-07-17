const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".links1");

burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Get the form element
const form = document.querySelector('.contactForm');

// Add event listener to the form submission
form.addEventListener('submit', function (event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Perform validation for each form field
  const nameInput = form.querySelector('input[name="Name"]');
  const phoneInput = form.querySelector('input[name="Phone"]');
  const membersInput = form.querySelector('input[name="embers"]');
  const dateInput = form.querySelector('input[name="Date"]');
  const timeInput = form.querySelector('input[name="Time"]');

  // Validate Name field
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(nameInput.value.trim())) {
    alert('Please enter a valid name with alphabets only.');
    return;
  }

  // Validate Phone field
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // Validate No. of Members field
  const membersRegex = /^\d+$/;
  if (!membersRegex.test(membersInput.value.trim())) {
    alert('Please enter a valid number for the number of members.');
    return;
  }

  // Validate Date field
  const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-(19|20)\d{2}$/;
  if (!dateRegex.test(dateInput.value.trim())) {
    alert('Please enter a valid date in the format dd-mm-yyyy.');
    return;
  }

  // Validate Time field
  const timeRegex = /^(0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) [AP]M$/i;
  if (!timeRegex.test(timeInput.value.trim())) {
    alert('Please enter a valid time in the format hh:mm:ss AM/PM.');
    return;
  }

  // Display form details in console
  console.log('Form details:');
  console.log('Name:', nameInput.value.trim());
  console.log('Phone:', phoneInput.value.trim());
  console.log('No. of Members:', membersInput.value.trim());
  console.log('Date:', dateInput.value.trim());
  console.log('Time:', timeInput.value.trim());
  console.log('Table reserved for ',membersInput.value.trim(),' members');

    form.reset();
  // If all fields are valid, you can proceed with form submission
  // Uncomment the following line to submit the form:
   form.submit();

  // Alternatively, you can perform further processing here
  // or redirect the user to another page


});

