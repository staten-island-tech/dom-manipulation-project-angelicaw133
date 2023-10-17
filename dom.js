const DOMSelectors = {
    form: document.querySelector("#form"),
    object: document.querySelector(".object-test"),
    h2s: document.querySelectorAll("h2"),
}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(DOMSelectors.object.value);
    DOMSelectors.h2s.forEach(
        (el) => el.testContent = DOMSelectors.object.value
    );
});