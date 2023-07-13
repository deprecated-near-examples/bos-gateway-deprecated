# Gateway

The gateway is a Next JS app that serves the frontend and loads the `bos-components`.

## Setup & Development

Initialize repo in the root:

```
yarn
```

Start development server:

```
cd gateway && yarn run dev
```

## Local Component Development

1. Run an instance of a component server like [near/bos-loader](https://github.com/near/bos-loader)

2. Run from the project root:

```
bos-loader sweeter.testnet -p ./bos-components/src
```

3. Open the `/flags` route of your viewer and set the BOS Loader URL e.g. `http://127.0.0.1:3030`

Note: there is no hot reload, you must refresh the page to see component changes
