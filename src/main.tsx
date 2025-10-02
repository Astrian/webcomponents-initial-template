import { applyDiff } from "webjsx"
import viteLogo from "/vite.svg"
import webjsxlogo from "/webjsx.png"
import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "./style.css"
import "./counter"

class App extends HTMLElement {
	constructor() {
		super()
		this.render()
	}

	render = () => {
		const content = (
			<div w="100vw">
				<div
					max-w="80rem"
					m="y-0 x-auto"
					p="8"
					un-text="align-center"
					flex="~ col"
					items="center"
				>
					<div flex="~">
						<a href="https://vite.dev" target="_blank" rel="noreferrer">
							<img src={viteLogo} alt="Vite logo" h="24" p="6" />
						</a>
						<a href="https://webjsx.org/" target="_blank" rel="noreferrer">
							<img src={webjsxlogo} alt="TypeScript logo" h="24" p="6" />
						</a>
					</div>
					<h1 font="medium" un-text="3.2rem">
						Vite + TypeScript + WebJSX
					</h1>
					<div class="card">
						<button id="counter" type="button"></button>
					</div>
					<div p="8">
						<x-counter />
					</div>
					<p text="#888">Click on the Vite and WebJSX logos to learn more</p>
				</div>
			</div>
		)

		applyDiff(this, content)
	}
}

customElements.define("x-app", App)
