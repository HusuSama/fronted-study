import { html, LitElement } from "lit"

class MyDivByLit extends LitElement {
    static properties = {
        test: {}
    }

    constructor() {
        super()
        this.test = "none"
    }

    render() {
        return html`<button @click=${() => this.test = "hello"} >${this.test}</button>`
    }
}

customElements.define("my-div-by-lit", MyDivByLit)
