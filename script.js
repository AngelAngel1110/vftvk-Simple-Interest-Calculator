function showMessage() {
	document.getElementById("result").style.display = "block";
};
function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var years = new Date().getFullYear()+parseInt(years);
    if(parseInt(principal) <= 0){
        alert("Please enter a positive number")
        principal.focus();
        return;

    }
    document.getElementById("depositmessage").innerHTML = ""+principal;
	document.getElementById("interestmessage").innerHTML = ""+rate;
	document.getElementById("amountmessage").innerHTML = ""+interest;
	document.getElementById("yearmessage").innerHTML = ""+years;
	showMessage();

	return false;
    

    
};
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

        