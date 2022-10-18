import { NsfwSpy } from './@nsfwspy/browser';
const img = document.getElementById("img");
const nsfwSpy = new NsfwSpy();
await nsfwSpy.load();
const result = await nsfwSpy.classifyImage(img);
console.log(result);
