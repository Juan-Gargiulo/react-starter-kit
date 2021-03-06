# React-StarterKit 🚀

This is a pre-cofigured boilerplate which includes the following toolchain:

- use [Create React App](https://github.com/facebook/create-react-app).
- redux.
- redux-sagas.
- react-router 5.
- some example routes (include one private).
- connected-router (usefull to routing in sagas ie.)
- Prettier (just install the extension and you are ready).
- Husky pre-commit to format code.

> For now.. you can change your login status from a variable inside
> the PrivateRoute component to test the auth routes. When you implement your auth flow, change this reference in this component.

> No CSS framework or library included, that's your choice.

#### `TODO`

- [ ] find a proper way to manage action creators

---

### `how start`

```bash
$ git clone
$ yarn install
$ yarn start
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
