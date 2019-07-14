let num1, num2, result;
let out = document.getElementById('out');

function plus(){
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 + num2;
	out.innerHTML = result;
}
function minus(){
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 - num2;
	out.innerHTML = result;
}
function multiply(){
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 * num2;
	out.innerHTML = result;
}

function divide(){
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 / num2;
	out.innerHTML = result;
}
