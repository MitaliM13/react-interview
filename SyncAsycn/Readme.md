# Synchronous and Asynchronous

- **Synchronous**
  Synchronous JavaScript refers to the traditional way of executing JavaScript code, where each operation is performed in a sequential and blocking manner. In other words, each line of code is executed **_one after the other_**, and the program will wait for each operation to finish before moving on to the next one. If an operation takes a long time to complete, it can potentially slow down the entire application, making it less responsive.

- **Asynchronous**
  Asynchronus Javascript allows certain operations to be executed independently from the last main program flow, so they don't block the execution of other tasks. This is typically achieved using techniques like callbacks, promises, and async/await, which allow developers to handle asynchronous operations more efficiently.

**Callback is not always asynchronous**

- **Promise**

A promise is an object representing the eventual completion or failure of an asynchronous operation

- **Promise Object**
  _new Promise()_
  A javaScript promise object contains both the producing code and calls to the consuming code. It can be used to deal with Asynchronous operation in JavaScript.

- _3 States_

1. Pending - Initial / Not yet fullfilled or rejected
2. Fullfilled/Resolved - Promise Completed
3. Rejected - Promise Failed
