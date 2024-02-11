
## Organizing code in separate scripts

JavaScript as a language has long been a language executed in the browser, and most of the time, the files were divided in different scripts which were loaded one by one. This made a chain of scripts executed with the developers foresight of what classes and functions were actually needed in each and every one of them. The rise of JavaScript as a back-end made the need for a better system. So the idea of importing and exporting modules became a thing. So now, with this feature we can actually divide our code in different scripts and export or import functions, values and objects wherever we need them. The system is simple. We divide the code in multiple js files. We export only the things that we want to expose to other files. We import whatever we need from those files. We use the imported functions, objects or values. 
> Note: The main script needs to have type="module" in order for this to work
> Note: The system does not work locally, so you would have to use some local server. You can try Live Server for Visual Studio Code

#### Folder Structure
```txt
index.html
script.js
modules
-- messageService.js
-- sayService.js
```

#### index.html
```html
<script type="module" src="script.js"></script> 
```

#### script.js
```js
import { sayHello, sayGoodbye } from "./modules/sayService.js";

sayHello("Bob");
console.log("How are ya?");
sayGoodbye("Bob");
```

#### modules/messageService.js
```js
// Exporting can be done bundled together
export { words, getRandomWord }

let words = {
    helloVariatns: ["Hey", "Hi", "Hello", "Yo"],
    goodbyeVariants: ["Bye", "Goodbye", "Cheers", "Peace"]
}

function getRandomWord(words){
    return words[ Math.floor( Math.random() * words.length )];
}
```

#### modules/sayService.js
```js
// Exporting can be done separately
import { getRandomWord, words } from "./messageService.js";

export function sayHello(name){
  let hello = "Hey";
  console.log(`${getRandomWord(words.helloVariatns)} there ${name}!`);
}

export function sayGoodbye(name){
  let bye = "Bye";
  console.log(`${getRandomWord(words.goodbyeVariants)} there ${name}!`);
}
```

## Extra materials 📘
* [Documentation on exporting and importing modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)