
#The RemoteLock mini-app implementation
To implement the RemoteLock mini-app project, it was decided to use other development tools and change the project structure:

**1. JavaScript -> TypeScript.**

_Why?_ For using static analyzing, autosuggest, types/interfaces, and for the ability to extend the project.

**2. Redux store + Axios middleware.**

_Why?_ Top-level global store to process and handle data in one specific place. This removes unnecessary logic from structural components and also it allows you to extend the project.

**3. React navigation and top tabs.**

_Why?_ To use a ready-made navigation module between screens.

**4. Project structure.**

_How?_ All working code is placed from the project root to the "src" folder. It isolates code from app life-required settings. And this allows you to use absolute paths in the correct way.

**This folder has:**

**a)** 'assets' folder - icons/images.

**b)** 'components' folder - screen-related and shared components.

**c)** 'navigation' folder - navigator components, routes, and TopTabBar UI component.

**d)** 'screens' folder - top structural components, which are used in navigators.

**e)** 'shared' folder - all functions, hooks, typings, interfaces, enums, etc, which are used in the whole app.

**f)** 'store' folder - organized store in one place, which consists of Axios-middleware and sub-modules.

**g)** 'App.tsx' - application entry point and top-level component, which consist of global context components and navigator.

**5. Changed design of the screens and elements.**

_Why?_ Firstly, it's allowed on demand. Secondly, I found some troubles in the UI and UX of mockups, it has:

**a)** Contrasting black.

**b)** Pale shades of red, yellow.

**c)** Various shades of green in one place.

**d)** Toggle in the middle required more time to tap than on the right side.

**e)** For users, it would be necessary to simplify the mental model of the Block / Unblock action (than the graphic component Toggle). Toggle is more suitable for a large set of options, not mental models of locks. So I change the Toggle on named buttons, which has little visual response.

**f)** Added loader status bar, for informing users about processes.

______________________________________________
_Demo:_

![RemoteLock-mini-app](https://user-images.githubusercontent.com/42808354/133963816-ee28c29a-5d3b-43da-aff5-8010541002ac.gif)

#//////////////////////////////////////////
# Frontend Engineer Code Exercise

# Terminology

- _Device_: A WiFi-enabled lock, connected to the Internet, which can be viewed
  and controlled via the app UI.
- _Access User_: A person who can permanently access doors which are protected
  with a smart lock. Each user has their own PIN which can be entered via the
  lock's keypad to unlock it.
- _Access Guest_: A person who can access doors protected with a smart lock for
  a certain date and time range.
- _Access Person_: An access user or guest.

# Exercise

In the `mobile/` directory you'll find an incomplete mobile application. The
task is to extend the code in that directory. The finished application should
have two screens, User and Devices, similar to these mockups:

![Devices](./Devices.png)

![Users](./Users.png)

**Additionally**, the devices screen should also include a **search box** to filter the devices
by name.

The code in the repository is unfinished, feel free to refactor/reorganize it as
you see fit.

# API

The app should fetch the data from an static API served by a local HTTP server.

To start the server run `node api_server.js`.

This server will expose two endpoints:

- Users: http://localhost:4000/api/users

- Devices: http://localhost:4000/api/devices

Additionally those endpoints support filtering by some attributes. The devices
endpoint support filtering name and the users one by status. To filter the
endpoint you need to pass the filter as a query param. ej. To filter the devices
whose name contain the string ome you would use the following URL:
`http://localhost:4000/api/devices?name=ome`.

Remember that when running on the device you may need some [additional configuration][running-on-device]


# What's Important

The goal of this challenge is to show familiarity with frontend
development concepts and ecosystem as well as good general programming
patterns. As such, we feel the following are important:

- Clarity/Readability: Is the intent of the code obvious? Are things named
  appropriately? Please void overly clever solutions.
- Maintainability: How flexible is the code?
- The UI is organized in terms of components
- Responsive design. The application should adapt to different screen sizes.
- The toggle in the device tile should work and maintain the state and cause
  other details in the tile to update.
- The body of the pull request gives a high level overview of your solution

# Bonus points

- The submission includes unit or integration tests

# What's Not Important

- Pixel-perfect design. Remember, these are just mock-ups. Feel free to
  customize the look and feel to your own taste.
- Choice of CSS methodology, library or framework. You can use whatever you are
  familiar with. CSS Modules, Sass or any CSS-in-JS library are accepted.
- Feel free to reach to any UI component or utility library to get the job done.
  No need to re-invent the wheel. Although for trivial stuff, you should feel
  comfortable writing the code yourself.
- Typed vs untyped JS (Flow, TypeScript and plain JS are all accepted)

# How to Submit the Exercise

- Fork the repository
- Create a new branch to work on.
- Push the branch to your fork and open a Pull Request to *your* fork.
- When your Pull Request is ready for review, respond to our last email thread
  with the link to your Pull Request.


[running-on-device]: https://reactnative.dev/docs/running-on-device
