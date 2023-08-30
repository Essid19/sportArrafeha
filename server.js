// import app file from app.js
const app = require("./backend/app");
// make serveur listening on port 3000
// http://localhost:3000
app.listen(3000, () => {
  console.log("BE serveur is listening on port 3000 ...");
});
