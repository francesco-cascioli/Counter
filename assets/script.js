document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    
    function createElement(tag, className = "", textContent = "") {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (textContent) element.textContent = textContent;
        return element;
    }

    const container = createElement("div", "container");
    const title = createElement("h1", "", "Counter");
    const counter = createElement("span", "", "0");
    counter.id = "counter";
    const btnContainer = createElement("div", "btn-container");
    
    const buttons = [
        { text: "-", class: "btn", action: "decrease" },
        { text: "Reset", class: "btn", action: "reset" },
        { text: "+", class: "btn", action: "increase" }
    ];

    buttons.forEach(({ text, class: className, action }) => {
        const button = createElement("button", className, text);
        button.dataset.action = action;
        btnContainer.appendChild(button);
    });
    
    container.appendChild(title);
    container.appendChild(counter);
    container.appendChild(btnContainer);
    app.appendChild(container);

    let count = 0;

    function updateCounter() {
        counter.textContent = count;
        counter.classList.add("change");
        setTimeout(() => counter.classList.remove("change"), 200);
    }

    
    btnContainer.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if (!action) return;

        if (action === "increase") count++;
        if (action === "decrease") count--;
        if (action === "reset") count = 0;
        
        updateCounter();
    });
});

