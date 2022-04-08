# ajax-example

<!-- ![Janky image I designed on Figma for this project](/assets/scssa.png) -->

Created this for a friend and whoever might benefit from it.

## What is this?
A simple repo showcasing ajax requests using native web APIs.

```
  TLDR: showcasing ajax requests using native web APIs.
```

## Getting Started

1. Clone this repository.
2. Have something like [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to easily run it.
3. If you are going to use TypeScript, have Node.js installed and run **npm install**. Then run **npx tsc fetchApi.ts** and **npx tsc xmlHttpRequest.ts** to transpile them to JavaScript.

### Prerequisites

Know HTML, JavaScript and a little bit of TypeScript (optional).

```
  Visit the MDN documentation to learn HTML and JavaScript.
```

## Findings
Both APIs allow you to achieve the same result, but the fetch API is "newer", faster and simpler. There is no
reason to use the XMLHttpRequest API on a new project, but it is good to know how it works.

## Directory Structure

```
.
├── .gitignore
├── fetchApi.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── xmlHttpRequest.js
```

## Built With

HTML, TS and JS.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [TS](https://www.typescriptlang.org/)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## Contributing

You are welcome to add to project.

## Authors

* **Toni Maunde** - *Initial work* - [ToniMaunde](https://github.com/ToniMaunde)

## License

This project is licensed under the MIT License.
