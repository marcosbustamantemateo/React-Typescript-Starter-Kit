# React Typescript Starter Kit

Tired of always doing the same to start a project?<br>
This is for you! The perfect solution for starting React Typescript projects. <br>
Include NavMenu with navigation and Search Modal

Libraries:

  - React Router
  - React Suite

## How to install & start

### `git clone` https://github.com/marcosbustamantemateo/React-Typescript-Starter-Kit.git

In the project directory:

### `npm install`

  Then

### `npm start`

# Documentation

- Add items to NavMenu

  Go to src/constant and edit MenuItems.ts
  
  ```javascript class:"lineNo"
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

- Disable fixed header

  Go to src and remove from App.css Line 2 and 7

  ```javascript class:"lineNo"
  .container {
    padding-top: 80px;
  }

  .header {
    height: 70px;
    position: fixed;
    width: 100%;
    background-color: black;
    color: white;
  }
  ```

  Check it with this method in Home.tsx

  ```javascript class:"lineNo"
  checkFixedHeader = () => {
  let newArray: Array<number> = [];
  for (let index = 0; index < 100; index++) {
    newArray.push(index);
  }
  this.setState({ elements: this.state.elements.concat(newArray) });
  };
  ```
  Uncomment it on componenteDidMount to run


# Soon

- Translation (i18N)


