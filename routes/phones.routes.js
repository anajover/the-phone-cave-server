const PhonesModel = require("../models/Phones.models");

const router = require("express").Router();


// GET "/api/phones" => show all phones
router.get("/", async (req, res, next) => {

    try {
        const response = await PhonesModel.find()
        res.json(response)
    } catch (error) {
        next(error)
    }
})

// GET "/api/phones/:id" => show a phone details
router.get("/:id", async (req, res, next) => {

    const {id} = req.params

    try {

        const response = await PhonesModel.findById(id)
        res.json(response)

    }catch(error){
        next(error)
    }
})


module.exports = router;