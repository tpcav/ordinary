# ordinary-word-game

A word guessing game that test your knowledge of the alphabet & vocabulary.

### Try the [demo](https://ordinary-word-game.vercel.app/)

## Installation

Created using Next.js v13.0.6 <br>
```
npx create-next-app@latest
```

Styled using Tailwind
- cd into project directory before installing
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js` file
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `./styles/globals.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Others
```
npm i @headlessui/react
npm i heroicons
```
