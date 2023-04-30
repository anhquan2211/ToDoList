import html from '../core.js';


function Header() {
    
    return html`
                 <h1>To Do List</h1>
                <header class="header">
                    <input 
                        class="new-todo" 
                        placeholder="To Do..." 
                        autofocus
                        onkeyup="event.keyCode === 13 && dispatch('add',this.value.trim())"
                    >
                    <button class="button-add" onclick = "dispatch('add',document.querySelector('.new-todo').value.trim())"></button>
                    </div>
                </header>

            `
}
export default Header;