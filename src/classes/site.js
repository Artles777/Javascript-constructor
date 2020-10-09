export class Site {
    constructor(Selector) {
        this.$el = document.querySelector(Selector)
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}