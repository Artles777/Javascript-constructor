import {block} from "../modules/utils";
import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(Selector, updateSite) {
        this.$el = document.querySelector(Selector)
        this.update = updateSite

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.create.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    create(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text'
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles})

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}