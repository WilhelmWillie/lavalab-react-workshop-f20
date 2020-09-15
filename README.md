# LavaLab React Workshop Fall 2020

Hey there! This is a repo for a workshop ran by me for [USC LavaLab](https://usclavalab.org/)'s LavaLearn open curriculum initiative. This workshop is intended to teach the fundamentals of React, one of the most popular UI frameworks used for building web and mobile apps. While there are links and several details in this README, to capture the full value of this workshop, it's recommended you follow along my slides and video recording (~40 minutes). 

If you have any questions, comments, or feedback, reach out to me on [Twitter](https://twitter.com/wilhelm_willie) or via e-mail at wilhelmwillie@gmail.com

**Slides:** https://docs.google.com/presentation/d/1TvilznnaHuzua_U07MzHpFXSmMuknHlSVUB6sITkZOc/edit?usp=sharing

**Recording:** https://lavalearn.webflow.io/development/technical-workshops/react-workshop

## Learning Outcomes

My goal is that after this workshop, you'll have a better understanding of:

- [ ] What React is and what it's capable of
- [ ] JSX and ES6 syntax
- [ ] React components, props and state, and the component lifecycle
- [ ] How to use hooks to manage data and breathe life into your React app

With limited time, it's okay if you don't fully understand everything presented in this workshop, but I hope at minimum this session is a net positive for you and your future development endeavors.

Note: This workshop is meant for beginners who are likely new to React and/or frontend development. If you already have React experience, this might not be as helpful to you. In the future, I might work on a follow-up workshop that dives into more complex topics.

## Pre-Requisites

This workshop is meant to be beginner friendly but some development experience is expected. You hopefully have some experience with HTML/CSS and/or beginner JavaScript. Also, it's very important to make sure you install Node.js and npm on your computer. Node.js' website can be found [here](https://nodejs.org/en). MacOS installation instructions [here](https://nodejs.org/en/download/package-manager/#macos). Windows installation instructions [here](https://nodejs.org/en/download/package-manager/#windows).

**Again, make sure you have installed Node.js and npm.** To make sure it's been installed, run the following commands:

```
node --version
npm --version
```

Your Node version should be >= 8.10 and your npm verssion >= 5.6

Node is a JavaScript runtime that lets you run JavaScript outside of the browser. npm is a package manager that lets you import third party dependencies into your projects. 

## How this workshop will work

My video recording that accompanies this workshop should cover everything in this README, the slides, and more. This README simply acts as supplementary material to help guide you if you get lost or need to refer to something. 

In the past, I've built projects from scratch during workshops. However, this time I'm switching it up by splitting this workshop into 3 sections:
* Introduction to React (15 mins) - Run through my slides and introduce some core concepts before we dive into code. Watch + listen while going over my slides to understand some of the core concepts you need to understand for React development.
* Live coding demo (15 mins) - I'll build a basic app that illustrates the core concepts of React and various implementation details. We'll be building a small app that keeps track of score for teams.
* Completed project walkthrough (15 mins) - Next, I'll walk through a slightly more complicated and polished app that showcases the concepts I just explained once again but in a slightly more complex way. This app will be a currency exchange app that does currency conversions for you for certain currencies.

To close out my workshop, I'll leave behind some challenges for you to complete after the workshop which build on top of the completed project. Hopefully after my workshop, you'll be able to expand on what I've built and put your newfound React knowledge to the test.

**Why this format?** Instead of walking you through how to build a project from scratch, line-by-line, I decided to maximize the time I have by explaining how things work with working examples instead of getting caught up in the granular line-by-line details. My hope is that learning from these examples will help reinforce the concepts better so you can extend/modify them to your needs 

## Live Coding Demo

Again, make sure you have the right versions of Node and npm installed. If you are seeing the right verisons when you run `node --version` and `npm --version`, then you're good to go and can start following along. We're going to be building a basic score board application that keeps track of 2 players' scores. First player to get a score of 10 is declared the winner.

To get started, run the following command:

```shell
npx create-react-app demo
```

Feel free to replace `demo` with a folder name of your choosing. `npx` is a tool provided by Node & npm that lets you run packages without needing to install packages globally. This is useful for CLI tools like `create-react-app`. Installing will take a second so just give it a second to generate and install. 

Next, you'll need to install `yarn`, another package manager that is built and used by Facebook (npm and yarn are very similar, you can read more about theme [here](https://stackshare.io/stackups/npm-vs-yarn)). To do so, run `npm install -g yarn`.

Once yarn is installed, navigate into your project and start the React app by running

```shell
cd demo
yarn start
```

This will start a localhost React app and will open your browser to `localhost:3000`. Now open the `demo` project folder into your code editor of choice (I prefer VSCode but any should work). As the app says, if you edit `src/App.js` and click save, your app will auto-reload. Feel free to delete all of the default HTML code

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  )
}
```

If you save, you should see a blank screen with a header that says "Hello world". Nice! Now let's look at the other files generated by the boilerplate:

- `App.css` is imported by `App.js` and lets `App.js` access defined CSS properties
- `index.js` is the entry point for the application and attaches the React app to the browser DOM. 
- `index.css` similar to `App.css`, imported by `index.js` though since `index.js` is basically the main entry point, styles defined in `index.css` are accessible by any React component. Useful for global styles
- `public/` is a public folder so any file here can be accessed via `localhost:3000/<FILENAME>`. Ex: `public/favicon.png` is accessible via `localhost:3000/favicon.png`
- `App.js` defines the code for the main App component

For now, we're just going to focus on `App.js` so we can focus on the React JS concepts. Let's go ahead and empty out our App() function so it looks like this:

```jsx
function App() {
  return (
    <div>
    </div>
  )
}
```

Our App function defines our main App component. Right now, it's a very simple component that doesn't take in props nor has any state. It simply renders HTML. Let's go ahead and start work on our first reusable component that can be used by App. Right before App(), let's define a Player function:

```jsx
function Player() {
  return (
    <div>
      <p>Player</p>
    </div>
  )
}
```

We can use this Player component within App like so:

```jsx
function App() {
  return (
    <div>
      <Player />
      <Player />
    </div>
  )
}
```

If we save, we'll see two Player paragraphs render on the screen. Let's go ahead and modify Player so that it takes props. Modify App() by adding props to the Player components:

```jsx
function App() {
  return (
    <div>
      <Player label="Player 1" />
      <Player label="Player 2" />
    </div>
  )
}
```

Next, we need to modify our Player component to consume this prop. Update Player so that it looks like the following:

```jsx
function Player(props) {
  return (
    <div>
      <h1>{props.label}</h1>
    </div>
  )
}
```

Now if we click save, we should see two player headings, one labeled "Player 1" and "Player 2". So cool, we have two components that are taking in props. Now let's add state to these individual Player components. Remember, state is mutable (modifiable) data tied to an individual component. Components can pass down state and methods to its children/grand-children components. To give state to player, update line 1 so it looks like the following:

```js
import React, { useState } from 'react';
```

then update Player so it looks like the following:

```jsx
function Player(props) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>{props.label}</h1>

      <p>Score: {score}</p>

      <button>Add Point</button>
    </div>
  )
}
```

This defines a state variable called `store`, a method for updating it called `setScore`, and defaults its value to 0. We can then display this score by embedding it like `{store}` within the return statement (which defines what this component should render). We also added a button which right now does nothing. Let's go ahead and add a callback to our Player component that handles clicks. We're going to use the `useCallback` hook which lets us define hook-friendly callback methods. Update line 1 so it looks like the following:

```js
import React, { useState, useCallback } from 'react';
```

Then under our useState line, add the following:

```jsx
const handleClick = useCallback(() => {
  setScore(score + 1);
}, [score]);
```

The first argument of the `useCallback` method is a function that will run whenever `handleClick()` is called. The second argument is a dependency array. To be performant, React will re-calculate the logic of this callback function whenever a variable in the dependency list is updated. If you didn't add `score` to that dependency list, `handleClick` will always act as if `score` was set to 0. Why do we do this? React hooks force you be more mindful of how your app reacts to changes and this functional paradigm encourages better patterns when building components. Hooks are also a lot more re-usable as they can be written in such a way that they are not tied to only a single component. You can read more about the advantages of hooks [here](https://medium.com/@mateuszroth/react-hooks-advantages-and-comparison-to-older-reusable-logic-approaches-in-short-f424c9899cb5).

Next, we need to update our return statement by attaching the handleClick method to our button by changing `<button>` to look like the following:

```jsx
<button onClick={handleClick}>Add Point</button>
```

Now if you save App.js, when you click a button you should see a player's score update. Sweet so our app is a bit more interactive now! Now, let's add some code that will declare a winner and display a message when a player reaches a score of 10. We're going to do this in the `App` component to illustrate how a parent component can pass down methods to a child component so that a child component can update a parent's state. In App(), let's add a state:

```js
const [winner, setWinner] = useState(null);
```

Like score, we define our state variable, a method to update it, and give it a default value (which in this case is null). Next, we'll define a function/callback that will be passed to our Player components

```jsx
const declareWinner = useCallback((winnerLabel) => {
  setWinner(winnerLabel);
}, []);
```

We'll then update our Player components so that we pass down this declareWinner callback to Player:

```jsx
<Player label="Player 1" declareWinner={declareWinner} />
<Player label="Player 2" declareWinner={declareWinner} />
```

We can now call `props.declareWinner('...')` within our Player component to update the winner state of the parent App component. We're going to now add a `useEffect` hook to our Player component to react when the score state variable has changed to be > 10.

Modify line 1 so it looks like:

```js
import React, { useEffect, useState, useCallback } from 'react';
```

Then in the Player component, add the following under the `const [score, setScore]...` line:

```jsx
useEffect(() => {
  if (score >= 10) {
    props.declareWinner(props.label);
  }
}, [score, props.label]);
```

We are introducing a `useEffect` hook. `useEffect` will run the function in the first parameter whenever any of the dependency variables change. This is good for adding "side effects" to your component. A useful example of this is making an API call when the component first mounts. To do this, we would write a `useEffect` hook with an empty list as a dependency (`[]`). This is our way of telling React to only run code once when a component mounts. As for our `useEffect` use case, we want to run `props.declareWinner()` whenever `score` changes. Every time score changes, we check the amount and if it is >= 10, we run `props.declareWinner`. Note: we also add `props.label` as a dependency because React has lint rules that enforce it. `props.label` in our code is set once and never changes, so it shouldn't be a problem. 

When we run `props.declareWinner(...)` and pass in a parameter, this should run the `declareWinner` callback we defined in App() which will update App's winner state. If you save and make a player's score go past 10, the `useEffect` will run but you won't be able to see any effects. To show a message when winner is set, we'll add the following to App():

```jsx
<div>
  {winner ? <p>Winner: {winner}</p> : null}

  <Player label="Player 1" declareWinner={declareWinner} />
  <Player label="Player 2" declareWinner={declareWinner} />
</div>
```

What we're introducing here is a conditional that will render a paragraph tag if winner is truthy or nothing (null) if winner is falsy. `null` is considered a falsy value so by default it will display nothing.

Now if you save and run the app, whenever a player reaches a score of 10, app will declare that player a winner and display a banner. Yay! We've built out a very basic app with state, props, and hooks. 

Now in the video, I did not address a "bug". If player 1 is declared a winner, then we update player 2's to be >= 10, player 2 gets re-declared a winner. We should've added a check in the `useCallback` so that we don't override the `winner` state if it's already set. `declareWinner` should actually look like:

```jsx
const declareWinner = useCallback((winnerLabel) => {
  if (!winner) {
    setWinner(winnerLabel);
  }
}, [winner]);
```

With this change, our app should be done. Now there are some optimizations you could make but I just wanted to illustrate some core implementation details so you could see how you can build interactive, re-usable React components. If you want, feel free to modify `App.css` to and declare some CSS classes. To attach this to your components, you have to use `className`. 

Ex:
```css
/* App.css */
.player {
  border: 1px solid gray;
  padding: 24px;
}
```

```jsx
/* App.js */
function Player(props) {
  /* ... */

  return (
    <div className="player">
      {/* ... */}
    </div>
  );
}
```

While this app isn't a super exciting one, I hope it was enough to teach you some core concepts that you can apply to future projects. Now, in the next section, we'll dive deeper into `currency-exchange`, a sample project provided in this repository. Here we can see a slightly more complex application that uses hooks more in-depth.

## Completed Project README

TODO: write README for currency exchange

## Further Reading

TODO: add links

## Questions, Comments?

Unfortunately, because these are pre-recorded, I can't answer your questions or comments live. If you have any questions, don't hesitate to reach out to me on [Twitter](https://twitter.com/wilhelm_willie), via e-mail at wilhelmwillie@gmail.com, or on the LavaLab Slack org. I'm more than willing to help you out with any React questions or if you want to sit down and debug some code, I'm more than willing to help with that as well.