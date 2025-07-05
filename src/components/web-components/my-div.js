class MyDiv extends HTMLElement {
    static get observedAttributes() {
        return ["test"]
    }
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = `<button style="width: 100px; height: 100px; background-color: blue;"><slot /></button>`
        const btn = this.shadowRoot.querySelector("button")
        btn.addEventListener("click", () => this.test = "hello")
    }

    get test() {
        return this.getAttribute("test") ? this.setAttribute("test") : "none"
    }

    set test(name) {
        this.setAttribute("test", name)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`name: ${name} oldValue: ${oldValue} newValue: ${newValue}`)
    }
}

customElements.define("my-div", MyDiv)
