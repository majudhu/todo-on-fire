# todo on Firebase

### Test a live version
- <https://todo-on-fire-c660e.web.app> OR <https://todo-on-fire-c660e.firebaseapp.com> 

## Important files are

### Hosting (static)

- public/index.html

### Functions (API)

- functions/index.js

> These are the only files that need only be changed after `firebase init`

## Commands

### Setup

- `npm install -g firebase-tools`
- ~~`firebase init`~~ (create new empty firebase project)

### Serve Locally

- `firebase serve --only hosting`
- `firebase serve`
- `firebase serve --only functions,hosting`
- `firebase serve --only functions`

### Deploy

- `firebase login`
- `firebase deploy`

### CLI Reference

<https://firebase.google.com/docs/cli>
