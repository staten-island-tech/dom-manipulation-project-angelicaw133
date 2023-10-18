const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first_name"),
    lastname: document.querySelector(".last_name"),
    osis: document.querySelector(".osis_number"),
    firstnameoutput: document.querySelector("#firstnameoutput"),
    lastnameoutput: document.querySelector("#lastnameoutput"),
    osisoutput: document.querySelector("#osisoutput"),
}

console.log(DOMSelectors.firstname);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstname = DOMSelectors.firstname.value
    DOMSelectors.firstnameoutput.innertext = firstname
});
console.log(DOMSelectors.lastname);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const lastname = DOMSelectors.lastname.value
    DOMSelectors.lastnameoutput.innertext = lastname
});
console.log(DOMSelectors.osis);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const osis = DOMSelectors.osis.value
    DOMSelectors.osisoutput.innertext = osis
});