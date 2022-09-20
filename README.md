# SOLID-TDD

[ref:](https://youtu.be/mjBsii0eiuI)

* `npm init -y`
* `npm i typescript @types/node -D`
* `npm i jest @swc/core -D`
* `npx jest --init`
  * add covarage reports: no
  * uncomment => `//transform: undefined,`
  ```js
  transform: {
     "^.+\\.(t|j)sx?$": [
       "@swc/jest",
       {
         jsc: {
           parser: {
             syntax: 'typescript',
             tsx: false,
             decorators: true,
           },
           target: 'es2017',
           keepClassNames: true,
           transform: {
             legacyDecorator: true,
             decoratorMetadata: true,
           },
         },
         module: {
           type: 'es6',
           noInterop: false,
         }
       },
     ],
   },
  ```
* `npm i @types/jest -D`
* `npm i ts-node -D`

problama -> entender ele

"Um sistema que o **aluno** resolve um **desafio** e a plataforma **corrige** e gera um **resultado**"
"TDD é metodologia de desenvolvimento"