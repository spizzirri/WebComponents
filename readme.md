# Web components

## API

1. Custom Elements
2. Shadow DOM
3. HTML Template
4. ES Modules

## Beneficios

* Reutilizacion
* Legibilidad
* Mantenibilidad
* Interoperabilidad
* Consistencia

## Ciclo de vida de un componente

```
                      constructor()
                          |
                          |
                         \|/
                    connectedCallback()
                      /             \
                     /               \
                    /                 \
                  |/_                 _\|
    attributeChangedCallback() ----> disconnectedCallback()


                        adoptedCallback()

```

* constructor()
    Se carga en memoria el componente

* connectedCallback(): 
    El componente ya existe en el DOM y se puede renderizar.

* disconnectedCallback():
    El elimina el componente del DOM

* attributeChangedCallback():
    Se atienden las actualizaciones en los valores de los atributos del componentes

* adoptedCallback():
    Cuando un componente se va adoptar en un iframe

## Tipos de DOM

* ShadowDOM
* LiveDOM
* ShadowRoot