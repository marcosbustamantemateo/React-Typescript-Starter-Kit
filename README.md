# React Typescript Starter Kit

Tired of always doing the same to start a project?<br>
This is for you! The perfect solution for starting React Typescript projects. <br>
Include NavMenu with navigation and Search Modal

Libraries:

  - React Router
  - React Suite

## Install

### `git clone` https://github.com/marcosbustamantemateo/React-Typescript-Starter-Kit.git

- Start

In the project directory:

### `npm install`

Then

### `npm start`

# Documentation

- Add items to NavMenu

  Go to src/constant and edit MenuItems.ts
  
  ```
  import Home from './../screens/Home';
  import Page from './../screens/Page';
  import Page2 from './../screens/Page2';

  export const items = [
      {
          name: 'home',
          path: '/home',
          component: Home
      },
      {
          name: 'page1',
          path: '/page',
          component: Page
      },
      {
          name: 'page2',
          path: '/page2',
          component: Page2
      }
  ];
  ```



