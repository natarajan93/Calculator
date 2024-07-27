let sum = document.getElementById("sum");

function clicking(hi) {
    sum.append(hi.innerText);
}
function clearall() {
    sum.innerHTML = "";
}
function calculator() {

    if (sum.innerHTML == "") {
        sum.innerHTML = "";
    }
    else {
        let a = eval(sum.innerText);
        sum.innerHTML = a;
    }
}

function clickin(hi) {
    if (sum.innerHTML.charAt(sum.innerHTML.length - 1) == '+' || sum.innerHTML.charAt(sum.innerHTML.length - 1) == '-' || sum.innerHTML.charAt(sum.innerHTML.length - 1) == '/' || sum.innerHTML.charAt(sum.innerHTML.length - 1) == '*' || sum.innerHTML.charAt(sum.innerHTML.length - 1) == '%'|| sum.innerHTML.charAt(sum.innerHTML.length - 1) == '.') {
        sum.append("")
    } else {
        if (sum.innerHTML == "") {
            sum.innerHTML = ""
        } else {
            sum.append(hi.innerText)

        }

    }
}





