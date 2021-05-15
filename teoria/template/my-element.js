class myElement extends HTMLElement {

    constructor(){
        super();

        this.p = document.createElement('p');
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2> Hola mundo </h2>
                <div>  
                    <p> Soy mas texto ejemplo </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `  
        <style>
            h2 { color: red; }
        </style>
        `
    }

    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);