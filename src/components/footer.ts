import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e9r-footer')
export class Footer extends LitElement {
	@property({ type: Number })
	count = 0;

	render() {
		return html`
			<button @click=${this}>
				<slot></slot>
			</button>
		`;
	}

	static styles = css`
		button {
			border-radius: 8px;
			border: 1px solid transparent;
			padding: 0.6em 1.2em;
			font-size: 1em;
			font-weight: 500;
			font-family: inherit;
			background-color: #1a1a1a;
			cursor: pointer;
			transition: border-color 0.25s;
		}

		button:hover {
			border-color: #646cff;
		}

		button:focus,
		button:focus-visible {
			outline: 4px auto -webkit-focus-ring-color;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'e9r-footer': Footer;
	}
}
