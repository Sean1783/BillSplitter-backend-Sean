# Bill Splitter backend server
To install server dependencies, go to the project's directory, and use command:
```
npm install
```
---
To run the server, use command:
```
npm start
```

For development (DEBUG), use:
```
DEBUG=myapp:* npm start
```

Index route set to port `3000`. To access, go to `http://localhost:3000/<routes>`.

---

### GET request for Andrew
```
http://localhost:3000/andrew
```
It should return a simple message