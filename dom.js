const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first_name"),
    lastname: document.querySelector(".last_name"),


}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.firstname.value
    );
});
