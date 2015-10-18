# cycle-todolist
Cycle.js todolist example

Make sure you have Node.js installed.

If you don't already have Bower installed, run:

```
npm i -g bower
```

Then, install the dependencies:

```
npm i && bower i
```

To start the server:

```
npm start
```

In a separate terminal, to watch for changes:

```
npm run watch
```

Then open http://localhost:3000 to view the example.

This example demonstrates a simple Cycle.js todolist app that:
- exchanges information with a server via HTTP
- shows a todolist in a table, with edit and delete
- shows a form to create and edit a todo
- validates the form before sending to the server
- creates views both with just `h` and also with `hyperscript-helpers` - you decide which you like better. :-)

