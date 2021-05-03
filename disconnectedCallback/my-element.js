class MyCustomElement extends HTMLElement {

    constructor(){
        super();
        console.log("Constructor - Memoria")
    }

    connectedCallback(){
        console.log("ConnectedCallback - DOM")
    }

    disconnectedCallback(){
        console.log("DisconnectedCallback - Fuera del DOM")
    }
}

customElements.define('my-element', MyCustomElement);

document.querySelector('my-element').remove();