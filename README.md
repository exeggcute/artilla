# App with simple In-Page full text search

Demo Link - https://exeggcute.github.io/artilla

### Building the code
We are following the distribution based build system, where every changes made to the source files, generates a final deployable asset files inside the `dist/` folder. Thus, the `dist/` folder can act as the root for the assets on web server.

To create a development version of compiled js & css files from the `src/`, we will run the following commands in order
```sh
npm i
npm run build
```

The default environment is `development`. We can create the build for different environments by passing the `process.env.NODE_ENV` values to the above commands. For eg, to create a build for `production` environment, we will run the following commands:
```sh
NODE_ENV=production npm run build
```

While working on the code, we would want to keep auto compiling the code on every change made to source files. For that to happen, we will build the code under `watch` mode.
```sh
npm run build:watch
```


### Code Styles & Linting checks
This code uses ES2015 JS Syntax which is later transpiled by babel to conform to browser supported syntax.

We use `eslint` for JS linting
```sh
$ npm run lint
```

### Unit Test
We are using Jest to perform unit tests of our Redux reducers & action creators

```sh
$ npm run test
```
