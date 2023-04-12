const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBiNWIxMzdkLThkMmEtNGRjNS04Y2M3LTdlMTkxNjU5MzNlOC0xNjgxMzM3NTU2NDA3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjBjZDUyYjAtNGY1Ny00MTM5LWI0MzUtMmRmNjRlOWRjZDE0IiwidHlwZSI6InQifQ.BvqYym3PWVEZz_g5ouYe-2oJXCtIVHmHUpptxWZ9DCg'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
