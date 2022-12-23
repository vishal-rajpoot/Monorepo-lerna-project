# Monorepo-lerna-project

## Available Scripts

# Started this project using monorepo

There are 2 different projects in a single monorepo. We can use `common` repo's components in `frontend` repo. However frontend is the entry point of React DOM ,so frontend can access and render all other repo's components. But `frontend's` components can't be access by other repo's, still other repos can access all other repos.

In the project directory, you can run:

### `yarn install`

Install all the packages available in root folder's `package.json` including packages which are available in different repos's `package.json` file.


### `yarn start` || `yarn woskpace [woskapce name] [command name]`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn workspaces run [command name]`

If we want to run a particular command in every repos then this will work.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**Note: `--watchAll=false --passWithNoTest` is mentioned in all repo's `package.json Scripts` which means watch mode will be false and if there are no test cases then still it should pass the test cases.
  1. Watch mode here is menu prompts that execute code on key press.
  2. If there are no test cases, it will break.

### `yarn workspaces info`

It shows the list of repo's dependencies which are dependent on each other.

### `yarn why [package-name]`

This will show us the reasons, why that particular package is here.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Till now we have used monorepo without `Lerna`.

# Started this project using Lerna


