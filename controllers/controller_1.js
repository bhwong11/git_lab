/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */

/* SECTION: Instanced modules */
const router = express.Router();

/* SECTION: Routes */

router.get("/", (req, res, next) => {
    res.send("Hello form products index page!");
});

router.get('/books',(req,res,next)=>{
    res.send('BUY BOOKS!!! (bryant test)')
})

/* SECTION: Export router */
module.exports = router;