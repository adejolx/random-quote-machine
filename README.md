# Random quotes Machine

**Important concepts I've learned from building this**

- Single responsibility principle: Here I abstracted the API call responsibility from the component so its only function is to render the UI

- Animation with Frame motion: This was particularly challenging, the docs are not as exhaustive. The goal was to achieve re-animation on state change. this is made possible using the `key` prop

- React with Typescript: Apparently `useState` is a generic and there's ways to type the `event` object returned during a DOM event. Thankful for resources that Matt Pocock puts out
