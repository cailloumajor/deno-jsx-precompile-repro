import { render } from "@testing-library/preact";
import { Window } from "happy-dom";

const win = new Window();
globalThis.document = win.document as unknown as Document;

render(
  <div>
    <span>something</span>
  </div>,
);

console.log(globalThis.document.body.innerHTML);
