import { record } from "./vmsg.js";

let recordButton = document.getElementById("recordButton");
recordButton.onclick = function() {
  record({wasmURL: "vmsg.wasm"}).then(blob => {
    console.log("Recorded MP3", blob);
    var url = URL.createObjectURL(blob);
    var preview = document.createElement('audio');
    preview.controls = true;preview.src = url;
    document.body.appendChild(preview);
  });
};