# Zuma Blocks

Blocks which are used for building music websites.

## Usage

```shell
# pnpm install
pnpm add zuma-blocks
# npm install
npm install zuma-blocks
# yarn install
yarn add zuma-blocks
```

### TailwindCSS

To carry through TailwindCSS styles in a consuming project, you'll need to update the consuming project's `tailwind.config.js` to recognize the zuma-blocks `./node_modules/zuma-blocks/dist/**/*.{js,ts,jsx,tsx}` folder. For example, your `tailwind.config.js` might look something like this:

```js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/zuma-blocks/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
};
```

## Development

```shell

# Start dev server
pnpm dev

# Build for production
pnpm build

# Build in watch mode (for testing in other projects)
pnpm build --watch
```

## License

ISC - free to use and modify
