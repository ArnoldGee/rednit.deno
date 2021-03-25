// fetch api

const res = await fetch('https://swapi.dev/api/people/')
// const resText = await res.text()

// const encodedResponse = (new TextEncoder).encode(resText);
// Deno.stdout.write(encodedResponse)


const resJson:string = await res.json();
console.log(resJson)

