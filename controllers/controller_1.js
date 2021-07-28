/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */

/* SECTION: Instanced modules */
const router = express.Router();

/* SECTION: Routes */

router.get("/", (req, res, next) => {
    res.send("Hello form products index page!");
});


router.get("/elNombre", (req, res, next) => {
    res.send("Just gonna watch and get credit doods");
});

/* SECTION: Export router */
module.exports = router;