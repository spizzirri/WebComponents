class myElement extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
    }

    static get observedAttributes(){
        return ['title', 'parrafo', 'img']
    }

    attributeChangedCallback(atributo, valorViejo, valorNuevo){
        if(atributo === 'title'){
            this.title = valorNuevo;
        }
        if(atributo === 'parrafo'){
            this.parrafo = valorNuevo;
        }
        if(atributo === 'img'){
            this.img = valorNuevo;
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src=${this.img}/>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `  
        <style>
            :host {
                display:inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
            }

            :host(.blue){
                background:blue;
            }

            :host([yellow]){
                background: yellow;
            }

            :host([yellow]) h2 {
                color: grey;
            }

            :host-context(article.card){
                display: block;
                max-width: 100%;
            }
        </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);