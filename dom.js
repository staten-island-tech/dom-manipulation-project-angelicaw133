const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first_name"),
    lastname: document.querySelector(".last_name"),
    osis: document.querySelector(".osis_number"),
    firstnameoutput: document.querySelector("#firstnameoutput"),
    lastnameoutput: document.querySelector("#lastnameoutput"),
    osisoutput: document.querySelector("#osisoutput"),
};


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();

    const firstname= DOMSelectors.firstname.value
    const lastname = DOMSelectors.lastname.value
    const osis = DOMSelectors.osis.value
    DOMSelectors.firstnameoutput.innerText = firstname
    DOMSelectors.lastnameoutput.innerText = lastname
    DOMSelectors.osisoutput.innerText = osis

});