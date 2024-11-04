class MyCard extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create card wrapper
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Create header slot
        const header = document.createElement('div');
        header.setAttribute('class', 'header');
        header.innerHTML = '<slot name="header"></slot>';

        // Create content slot
        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        content.innerHTML = '<slot name="content"></slot>';

        // Create footer slot
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');
        footer.innerHTML = '<slot name="footer"></slot>';

        // Append slots to card
        card.appendChild(header);
        card.appendChild(content);
        card.appendChild(footer);

        // Add styles to shadow root
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                margin: 10px;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                background-color: var(--card-bg, white);
            }
            .header {
                padding: 16px;
                background-color: var(--header-bg, #007bff);
                color: white;
                font-size: 1.5em;
                text-align: center;
            }
            .content {
                padding: 16px;
            }
            .footer {
                padding: 16px;
                text-align: center;
                background-color: #f1f1f1;
            }
        `;

        // Attach the elements to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(card);
    }
}

// Define the custom element
customElements.define('my-card', MyCard);
