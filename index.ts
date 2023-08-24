// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

class Tin {
  writeTextOnPage(text: string) {
    appDiv.innerHTML = text;
  }
}

let a = new Tin();
a.writeTextOnPage('hoi');
