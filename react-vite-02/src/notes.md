  About react hooks 
React Hooks are functions that enable functional components to "hook into" React state and lifecycle features, which were previously only available in class components. Introduced in React 16.8, they provide a more streamlined and intuitive way to manage state and side effects within functional components, eliminating the need for class components in many scenarios.

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. 

React components 
In React, components are the fundamental building blocks for creating user interfaces. They are independent, reusable pieces of code that define the structure and behavior of a part of your UI.

    import React from 'react';

    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    export default Greeting;

    functon that return html elements 


    react core algoritm --fibre 
    used to update virtual dom 



Virtual DOM:
The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model).
It is a JavaScript object that mirrors the structure and properties of the elements in your UI.
When a component's state or props change, React first updates this Virtual DOM, creating a new Virtual DOM tree

  for the virtual dom updation algorithm:
Reconciliation is the algorithm React uses to determine the most efficient way to update the actual DOM based on changes in the Virtual DOM.
