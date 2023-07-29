const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

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
	const emailValue = emailField.value;
	console.log(emailField);

	if (!isValidEmail(emailValue)) {
		emailError.innerText = "Valid email required";
		emailError.style.color = "red";
		emailField.style.borderColor = "red";
	} else {
		location.replace("/success.html");
	}
};
