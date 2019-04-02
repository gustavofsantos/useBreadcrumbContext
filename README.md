# useBreadcrumbContext hook

This React Hook act as a context queue of links, views or whatever the user has visited or interacted. You can set a initial state that is a list and the maximum size of the queue.

## Usage

```js
const [
  breadcrumbList,
  pushContext,
  popContext,
  clearContext
] = useBreadcrumbList();
// or useBreadcrumbList([/** list of predefined contexts */], 10);

// code
pushContext({
  label: "Some pretty nice label",
  link: "A link to that context, usualy an link to use as href",
  info: {
    // a pretty nice object to use as aditional information
  }
});

// pop the oldest context
const oldestContext = popContext();

// clear the context queue
clearContext();
```
