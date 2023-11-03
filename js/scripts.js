function hideResults() {
    document.getElementById("equi").setAttribute("class", "hidden");
    document.getElementById("isos").setAttribute("class", "hidden");
    document.getElementById("scal").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

function processFormValues() {
    hideResults();
    const name1 = parseInt(document.querySelector("input#name1").value);
    const name2 = parseInt(document.querySelector("input#name2").value);
    const name3 = parseInt(document.querySelector("input#name3").value);

    if (name1 && name2 && name3) {

        if (name1 === name2 && name1 === name3) {
            document.getElementById("equi").removeAttribute("class");
        } else if (name2 !== name1 || name2 === name3) {
            document.getElementById("isos").removeAttribute("class");
        } else if (name3 !== name1 || name3 !== name2) {
            document.getElementById("scal").removeAttribute("class");
        } else {
            document.getElementById("sorry").removeAttribute("class");
        }
    }
}

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        hideResults();
        processFormValues();
        event.preventDefault();

    });
});