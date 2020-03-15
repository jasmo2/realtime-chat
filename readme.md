# Socket.io chat in webpack-typescript

> Heroku-app
> [https://webpack-react-chat.herokuapp.com/](https://webpack-react-chat.herokuapp.com/)

### Tech Stack

This project has taken the **ReactJS** as development framework.

- **Apollo-boost**, for local management.
- **Emotion** for styled the application.

Actually, it is build on top of typescript with a minimal webpack configuration.

Additionaly, for the folder structure I based on _[Atomic webdesign](https://bradfrost.com/blog/post/atomic-web-design/)_.

---

### Project Development

##### For the global state

The desition of working with **Apollo-boost** was made due to the project initial was made on _**GATSBY**_.
But then I change it to a completly scratch webpack project.

Because I have worked with both _Apollo_ and _Redux_. I decided _Apollo-Boost_ due to I feel it much simple than all the redux life cycle.

##### Visual Components

After choosing the stack, the next step was to have everything mock.
On this behalf emotion was choosen for library as styled components. On the past I had worked with css,
sass and pther pre-css compilers. Eventough is okay to work with them. Styled components encapsulates much
better the styles between components. This is the main reason of choosing this style system.

##### Socket management

During the project development I just realize. Many of the features of the localstorage where not neccessary.
Eventough I decided to keep on the project, as a show of a way to manage global-state.

The main reason not to use the global state was the websocket. _At first I didn't realize I need to instanciate
Socket.IO_; so i couldn't write and/or get the instance-object in memory through the global-resolvers.

What I did was to instanciate it on the TOP class of chat and then pass it down to the components that need it.
Additionaly, I created a Socket props so I could share it to the components that need to recieve this prop.

##### Write Component

Without question was one of the key points for the application. Here I neede to do some validations.

- _Keyup_ - _keyDown_ and _timeout_ to **"emit"** if a user was typing or not.
- Giffy instanciation, as well as regex to validate it was ok to call the API or just set it as a text.
- Get the **_get the typers_** .Because I remove the current user typing and just be aware of the rest.
  - multiple or single user as well.

Finally, I connect all this states to the _`<Messages />` Component_ which needs to be aware of the incoming
data to render it.

##### Messsages Component

As said before this component shows the information income from `socket.on('message')`. In other words the one
in charge to feed back the user.

For this section a division was made between a single component and the one which recieves all the info.

And the one which filter, transform adn manage the infomation.

You will see 3 _interfaces_ inside \<Message /> because these 2 share almost all the components, but differs on
a component, which allows the user to send multiple message inside a single component. This is encapsulated inside
`<Body>` and only diffenciates if the incomming message is a GIF or TXT.

## Webpack

In the webapck configuration, as mention before it was made typescript configuration.

#### Why TS?

Because with typescript helps a lot to find error during compopilation time and not in runtime, making
development much faster and reliable.

##### Separation

The Separation of webpack **Dev and Prod** was to handle much easier the way I could develop and
deploy the application.

### DEV

For DEV env my goal was to make it as easier as posible to develop. That is the reason I used:

- `new webpack.HotModuleReplacementPlugin()` - To enable the hot module replacment globaly.
- `new webpack.NamedModulesPlugin()` - To print readeable names in the brower while developing.
- `hot: true` - To enable hot module replacement on the server

### COMMON

For the common, the main point was to:

- `TsconfigPathsPlugin` - Configure the TS paths on the project
- `context: resolve(__dirname, '../src'),` - Set the project context.
- `HtmlWebpackPlugin` - Make it work with Express and a small template engine on it.

## ExpressJS

Due to I needed some type sort of server to take-up the react application on prod I
decided to use EXPRESSJS to accomplish it. Coincidentally, I have been working with express
and templates on the last few weeks, making it easier to understand for me and configure also.

```
app.use(express.static(sourceDir))
```

In the line above I tell the server to use the compile assets for pro environment.

Finally, on the `ejs` template I tell it to use a compile prod-version of react or not depending on
the environment I am in at the moment.

---

## Final words

Even though, is my first time working with react-socket.io I like the challenges I found during
this app development.

I try to modularize as I usually do, hope you like the way this project is structure.

> Regards, **Jaime Molina _aka jasmo2_**

---

> Heroku-app
> [https://webpack-react-chat.herokuapp.com/](https://webpack-react-chat.herokuapp.com/)
