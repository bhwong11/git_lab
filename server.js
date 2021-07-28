/* SECTION: external modules */
const express = require("express");

/* SECTION: internal modules */

/* SECTION: instanced modules */
const app = express();

/* SECTION: Server/App config */
const PORT =  4000;

/* SECTION: Middleware */

/* SECTION: Routing */

/* SECTION: Serverbinding */
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});