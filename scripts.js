/* Add your JavaScript to this file */


window.onload = function Email(){
	let email = document.getElementsByName("email");
	let formData = document.getElementsByClassName("form-group");
	let button = document.getElementsByClassName("btn")[0];
	let messageElement = document.getElementsByClassName("message");


	button.addEventListener('click', function() {
		let message = ''
		if (email.value ==='' || email.value == null) {
			e.preventDefault();
			message.push('Email is required');
			alert('Email is required');
		}

		if (message.length > 0){
			e.preventDefault();
			messageElement.innerHtml = "email Submitted";
			alert('Email Submitted');

		}
	});
}
/*getElementsByClassName("btn").onclick = function() {Email()};
getElementsByClassName("btn").addEventListener("click", function(){Email()});

function Email(formData){
	let newEmail = formData.email.value;
	var messageElement = document.querySelector('.message');
	if (newEmail){
		messageElement.innerHtml = `Your email address <${newEmail}> has been added to our mailing list`;
		return false;
	}else{
		messageElement.innerHtml = "Email must be filled out, please enter a valid email address";
		return false;
	}
}*/