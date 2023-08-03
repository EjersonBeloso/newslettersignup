const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

const success = document.getElementById("success-main");
const subscribe = document.getElementById("main-container");
const successEmail = document.getElementById("success-email");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	validateInputs();
});

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
	let email = [];
	const emailValue = emailField.value;
	email.push(emailValue);
	console.log(email);

	if (!isValidEmail(emailValue)) {
		emailError.innerText = "Valid email required";
		emailError.style.color = "red";
		emailField.style.borderColor = "red";
	} else {
		success.classList.add("show");
		success.classList.remove("hide");

		subscribe.classList.add("hide");
		successEmail.innerHTML = emailValue;
		successEmail.style.fontWeight = "800";
	}
};
