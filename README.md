## Levelpath frontend take-home task

### Task

Implement a list of today's birthdays using Wikipedia's "On this day" API.

### Requirements

- Initially there must be a button. Data is fetched and displayed after the button is clicked.
- Entries should be ordered by their year.
- "Loading" message/UI component must be shown while data is being fetched.
- Error modal must be shown when fetching data has failed.

### Implementation requirements

- React framework and global state management solution of your choice (Context, Redux, MobX, etc.) must be used.
- Provide some basic styling with custom css or css-in-js solution of your choice.
- You can use whatever React project boilerplate, tools and libraries you like.
- TypeScript is preferred over JavaScript.
- Application parts must have tests, however it's not necessary to have full test coverage, write at least a single one for every type of test. As an example for imaginary Redux project: action creator, reducer, asynchronous functions, UI component render, UI component user interactions are different types of tests.

### Submitting

- Please bundle your homework using `git bundle create lp-fe-homework.bundle --all`
- Attach the bundle file to an email and send as a reply to the initial homework email
- We will then extract it using `git clone lp-fe-homework.bundle` on our side

---

# version: 2023-07-31

# Printscreen
<img width="1536" alt="image" src="https://github.com/alan345/level-path/assets/15246526/bb55a285-c9bf-4ad5-84d5-82ff810188c2">


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

## Tests
<img width="590" alt="image" src="https://github.com/alan345/level-path/assets/15246526/4fe1d8aa-9548-4755-9e6f-e57c8fbcab59">

## api key (For demo only)

Client ID:
e8100d264063cbe389ced0789e402eef
Client secret:
e98fffeb3097a1f4ef44939657ac30e80f40d289
Access token:
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlODEwMGQyNjQwNjNjYmUzODljZWQwNzg5ZTQwMmVlZiIsImp0aSI6ImJhYTQ1ZTk1MGIxNjU1YTcxZWEyZjQzNWFhMDM1Y2VlZTYxOWM1ZDM2ZTFjMzhlNjFhNzYwZDQ0OTU5OWY3MWI2NDI1NDA2OGYyZGM0MDE0IiwiaWF0IjoxNzE5MDM4Mjg4LjI5OTc1NCwibmJmIjoxNzE5MDM4Mjg4LjI5OTc1NywiZXhwIjozMzI3NTk0NzA4OC4yOTYzNjQsInN1YiI6Ijc1OTI3OTAzIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.SWtfjEjK0Uj4UT4eEM8UL_YVQ3df8dy99pCHBR_flagQWZNbsg4rJJ5AZmr5oCBJ45AElQXvF0bPhEezs6K8gBzw6q4WI-3n9Pfsc3hOKc_G2UCk6LggV06P8LqypbWwevnnh28vJuxpT6K3a2vAjuOdQOqhpaXanKvwg-tKyDlmsBWQFjDYRDYsXn7XPHK3Xd9kp_J9BxaAqQmthXKRIr3Q87bKp-\_QShbVEWQrPNA-qQbuxnb8JU0OQsCSHq4C7ExTU3yU7lzqxcTQwJIeONSEfc6zdC9JAEQBfOJfSIk8QSy7vTESSyHOvaEnjYR6NHGtTEjZqSzfeOqsVvoDpAQs3irHjaGJhR7Ib1jF31sO7NPlCmFfC-zNtiI13MZgzn2ih9QTwU8TxY3wnYuc7UOA7Y0VaWFdAupr0lv06EltBkIQH1pJaJRhCY1uoX4zVZM71Drw3prRjUMZFLwDh85p9TcgLlUGHGL8RgfG596IHIr-Hd5cVORxf9C_0BTR_r3Ki71LE1kGH89o96yaK8E8F-zmsRLvrSeMHj09sZ0dYqWicubZWrI44dirBmpW8IxV1vNxPbBs-kwSYDT4kAPGKZ-1kPQmweQBtUUiCwoGB0WUTm3BBe4220W1qPMoSG7PJ3C9k9VxOKypiAwFek1BMVmY0cTZuWd3kTIYAp0
