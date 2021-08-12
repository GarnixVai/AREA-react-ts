# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Game Play
When the web starts, the app will show the home page with three icons: 
- Rules: 
    -  Paper beats rock 
    -  Rock beats scissors 
    -  Scissors beats paper 
    -  If the two choices are the same, then it's a tie 
    -  The user should be able to play a new game every time. Scissors, Rock and Paper.
- Default Mode: Player vs Computer
- How to Play:
    - Choose the Scissors/Paper/Rock icon (if the mode is manual).
    - Click play again icon(restart) to enter the next game.
    - If the mode is *Computer vs Computer*, you don't have to do anything except click the play again icon(restart) to enter the next game
- Settings: On the top-left corner, it showed what play mode you currently stayed. You could switch the mode from *Player vs Computer* to *Computer vs Computer*
- Score: 
    - On the top-right corner, there is a score to record how many points you get.
    - Calculation: when winning, the score would add up by 1, when losing, the score would decrase(-1), if it's a draw, the score would not change.


## Unit Test Problem
- Tool: jest
- The computer player is randomed inside directly when the game component is redirected/page refreshed. It's very danger to use *setState* in the unit test here. Originally the test cases should involve the 6 conditions (scissor/paper/rock win, scissor/paper/rock draw). However, the mock value of the robotic value is somehow stucked(still trying to find the solutions)


