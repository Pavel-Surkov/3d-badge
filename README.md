# Three.js & Rapier Physics Engine badge example (react)

## Tutorial [link](https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber)

Packages: 
- [three](https://www.npmjs.com/package/three)
- [meshline](https://www.npmjs.com/package/meshline)
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei)
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)
- [@react-three/rapier](https://www.npmjs.com/package/@react-three/rapier)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
