# Vite + WebJSX Template Repository

![Screenshot](https://s2.loli.net/2025/10/02/eiYOHwm9E23gRhZ.png)

This is a template repository for creating an initialized front-end project. Clone this template and those libraries are pre-installed and pre-configured without further actions:

- [Vite](https://vite.dev)
- [TypeScript](https://www.typescriptlang.org)
- [WebJSX](https://webjsx.org) with [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) support (Shadow DOM not included)
- [UnoCSS](https://unocss.dev) with Tailwind CSS-reset presets and attributify mode enabled
- [Biome](https://biomejs.dev) with tab character indentation (instead of spaces) and avoiding semicolons
- `.gitignore` file with whitelist mode

## How to Use
- Click `Use this template` at the top-right, then `Create a new repository`
- Fill in the information
- Clone the new project to your local machine
- `npm i` then `npm run dev`
- See the template on your browser

Don’t forget to:

- Modify this `readme.md` file
- Modify the name in `package.json` config
- Check the `.gitignore` (since it is in whitelist mode)
- Check the preset of `biome.json`, and set the git hook
- Remove unlicense statement and replace it as your own (if necessary)

## But Why
The vanilla-flavored (a.k.a. native environment) front-end is more powerful than we expected, especially for people who have a lot of experience with “modern frameworks” like React, Vue, Angular, etc. Web Components is a really powerful technology and you should have a try and consider replacing the bulky frameworks.

I made a lightweight framework (which in learning purpose) based on Web Components technology called [Laterano](https://codeberg.org/Astrian/Laterano) and works fine. However, it doesn’t resolve an issue to traditional Web Components. For example, the editor cannot highlight the syntax of inline HTML strings, also it cannot check the type of the components, etc.

That’s why WebJSX was introduced. WebJSX is a JSX/TSX transpiler instead of a fully functional front-end framework. You can enjoy the benefits from JSX/TSX language, such as HTML syntax highlighting, list rendering and conditional rendering, type check and more. I believe it is a great improvement of the development experience of Web Components (although I am actually not a fan of JSX/TSX language).

Since Vite doesn’t provide the project initialize preset of Web Components/WebJSX, I created this template repository to avoid re-configurating when I create a new front-end project.

For UnoCSS and Biome, it just my personal preference.

UnoCSS is a lighter version of Tailwind and give you a larger flexibility of styling and higher performance on CSS generating. Same reason of choosing Biome instead of Prettier.

You may notice I prefer to use tab character and avoid semicolons as indentation. This is a very personal choice, which I believe it can save more storage no matter on local machine or remote hosting. Also I think tab character can let user to choose their indentation length instead of fixed 2 or 4 width.

You can clone and get rid of all my personal quirk anytime.

## (Un)license
This template is totally in public domain and anyone can use, modify and distribute the template as they wish. See [UNLICENSE](./UNLICENSE)
