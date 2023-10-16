const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h2s.forEach(
        (el) => el.testContent = DOMSelectors.firstname.value
    );
});