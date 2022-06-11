const router = require("express").Router();
const { route } = require("express/lib/application");
const User = require("../models/user");

router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

})

router.post("/", async (req, res) => {
    try {
        let savedUser
        if (req.body.name, req.body.email, req.body.attending) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                dish: {
                    category: req.body.dish.category,
                    name: req.body.dish.name
                }
            })
            savedUser = await newUser.save()
        } else {
            res.status(500).json({
                message: "missing fields"
            })
        }
        res.status(200).json(savedUser)
    }
    catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    }
    catch (error) {
        return res.status(500).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "User Deleted" })
    }
    catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;