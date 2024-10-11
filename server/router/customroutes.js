const bcrypt = require("bcryptjs");
const express = require('express');
app = express();
app.use(express.json());


User = require('../models/user')

app.get('/about', (req, res) => {
    res.send('about us page')
});

app.get('/', (req, res) => {
    res.send('welcome to home ')
});

app.post('/usersave', async (req, res) => {
    const { first_name, last_name, address, adhar_no } = req.body;
    if (!first_name || !last_name || !address || !adhar_no) {
        return res.status(422).json({ error: "please fill all details." })
    }

    try {
        const adharExist = await User.findOne({ adhar_no: adhar_no })
        if (adharExist) {
            return res.status(422).json({ error: "adhar no is already entered." })
        } else {
            const user = new User({ first_name, last_name, address, adhar_no })
            await user.save()
            return res.status(201).json({ success: "Entry saved successfully." })
        }
    } catch (err) {
        console.log(err)
    };


})

app.get("/showcrud", async (req, res) => {
    res.json(await User.find({}));
});


module.exports = app;