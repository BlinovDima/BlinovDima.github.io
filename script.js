

var znachOne=0;
var znachTwo=0;
var znack;

function text1() {
	let elem1 = document.getElementById('sss');
	elem1.value = elem1.value + 1;
	elem1.style.background = 'lightgrey';
}

function text2() {
	let elem2 = document.getElementById('sss');
	elem2.value = elem2.value + 2;
	elem2.style.background = 'lightgrey';
}

function text3() {
	let elem3 = document.getElementById('sss');
	elem3.value = elem3.value + 3;
	elem3.style.background = 'lightgrey';
}

function text4() {
	let elem4 = document.getElementById('sss');
	elem4.value = elem4.value + 4;
	elem4.style.background = 'lightgrey';
}

function text5() {
	let elem5 = document.getElementById('sss');
	elem5.value = elem5.value + 5;
	elem5.style.background = 'lightgrey';
}

function text6() {
	let elem6 = document.getElementById('sss');
	elem6.value = elem6.value + 6;
	elem6.style.background = 'lightgrey';
}

function text7() {
	let elem7 = document.getElementById('sss');
	elem7.value = elem7.value + 7;
	elem7.style.background = 'lightgrey';
}

function text8() {
	let elem8 = document.getElementById('sss');
	elem8.value = elem8.value + 8;
	elem8.style.background = 'lightgrey';
}

function text9() {
	let elem9 = document.getElementById('sss');
	elem9.value = elem9.value + 9;
	elem9.style.background = 'lightgrey';
}

function text0() {
	let elem0 = document.getElementById('sss');
	elem0.value = elem0.value + 0;
	elem0.style.background = 'lightgrey';
}

function textClears() {
	let elemClear = document.getElementById('sss');
	elemClear.value = "";
}

function textPlus() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	elop.value = "";
	znack = "+";
}

function textMinus() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	elop.value = "";
	znack = "-";
}

function textDelenie() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	elop.value = "";
	znack = "/";
}

function textUm() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	elop.value = "";
	znack = "*";
}

function textKoren() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	znack = "!";
	elop.value = Math.sqrt(parseFloat(znachOne));
}
function textKvadr() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	znack = "^";
	elop.value = parseFloat(znachOne)*parseFloat(znachOne);
}

function textProc() {
	elop = document.getElementById("sss");
	znachOne = elop.value;
	elop.value = "";
	znack = "%";
}

function textSlice() {
	let elemSlice = document.getElementById('sss');
	elemSlice.value = elemSlice.value.slice(0, -1);
}

function textTochka() {
	let elemT = document.getElementById('sss');
	elemT.value = elemT.value + ".";
	elemT.style.background = 'lightgrey';
}

function textRavno() {
	elop1 = document.getElementById("sss");
	znachTwo = elop1.value;
	elop1.value = "";
	

	switch (znack) {
  case "+": elop.value = parseFloat(znachOne) + parseFloat(znachTwo);
    break;
  case "-": elop.value = parseFloat(znachOne) - parseFloat(znachTwo);
    break;
  case "/": elop.value = parseFloat(znachOne) / parseFloat(znachTwo);
    break;
  case "*": elop.value = parseFloat(znachOne) * parseFloat(znachTwo);
    break;
  case "%": elop.value = (parseFloat(znachOne) * parseFloat(znachTwo))/100;
    break;
  default:
    alert( "Нет таких действий" );
	}
}