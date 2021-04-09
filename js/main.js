// language change dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.change-language')) {
            var dropdowns = document.getElementsByClassName("change-language-list");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //   end language change dropdown
    // show password
function showHidePass() {
    var x = document.getElementById("show-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
$(document).ready(function() {
    $("#eye-show").click(function() {
        $(this).toggleClass("invisible-eye");
    });
});

// collapse/ Accordion
var accItem = document.getElementsByClassName('appoint-accordion-list');
var accHD = document.getElementsByClassName('appoint-accordion-list__btn');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'appoint-accordion-list close';
    }
    if (itemClass == 'appoint-accordion-list close') {
        this.parentNode.className = 'appoint-accordion-list open';
    }
}
// click to copy
document.querySelector("#click-to-copy").addEventListener("click", (e) => {
    let value = document.querySelector("#copy-id");
    value.select();
    document.execCommand("copy");
});
// checkbox click to disabled input