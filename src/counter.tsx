import { applyDiff } from "webjsx"

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"x-counter": {
				onclick?: () => void
			}
		}
	}
}

class CounterComp extends HTMLElement {
	counter = 0

	connectedCallback() {
		this.render()
	}

	render = () => {
		const content = (
			<button
				type="button"
				rounded="0.5rem"
				border="~ transparent hover:#646cff"
				p="y-0.6rem x-1.2rem"
				font="medium"
				bg="#f9f9f9 dark:#1a1a1a"
				onClick={this.counterPlus}
			>
				Count is {this.counter}
			</button>
		)
		applyDiff(this, content)
	}

	counterPlus = () => {
		this.counter++
		this.render()
	}
}

customElements.define("x-counter", CounterComp)
