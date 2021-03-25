console.log("Hello World!");

// reading files with decoder
const data = await Deno.readFile("README.md");
Deno.stdout.write(data);
const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(data));

// reading files shortcut
const doge = await Deno.readTextFile("doge.txt");
console.log(doge);

// writing files
const textToSave = "This is the text I want to save";
const encoder = new TextEncoder();
const encodedText1 = encoder.encode(textToSave);
await Deno.writeFile("net-ninja-course/file1.txt", encodedText1); // also writeTextFile

// renaming already created files
Deno.rename("net-ninja-course/file1.txt", "net-ninja-course/file2.txt");

// writing shortcut, without having to encode
await Deno.writeTextFile("net-ninja-course/file1.txt", textToSave);

// deleting files
await Deno.remove("net-ninja-course/file1.txt");
