# Bill Splitter backend server
To install server dependencies, go to the project's directory and use the command:
```
npm install
```
---
To run the server locally, use the command:
```
npm start
```

For development (DEBUG mode), use:
```
DEBUG=myapp:* npm start
```

Index route set to port `3000`. To access the index page, go to `http://localhost:3000`.

---

### GET request for Andrew
```
http://localhost:3000/andrew
```
It should return a simple message from Andrew.
