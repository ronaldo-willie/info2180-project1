/* Add your JavaScript to this file */

window.onload = function Email(){
	const email = document.getElementsById('email')
	const formData = document.getElementsByTagName('form')
	const button = document.getElementsByClassName('btn')
	const messageElement = document.getElementsByClassName('message')


	formData.addEventListener('button', (e) => {
		let message = []
		if (email.value ==='' || email.value == null) {
			e.preventDefault();
			message.push('Email is required')
		}

		if (message.length > 0){
			e.preventDefault()
			messageElement.innerText = message.join(',')

		}
	})
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