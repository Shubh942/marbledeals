const User = require("../models/userModel");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("websit", {
    //dynamically assign homepage title
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My About Page",
  });
});
router.get("/albeta", (req, res) => {
  res.render("albeta", {
    title: "Albeta Page",
  });
});

router.get("/contact", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.render("contact1", {
    title: "My Contact Page",
  });
});

// router.get('/contact',(req,res)=>{
//     res.render('contact1',{
//         "ALLow-access-Allow-Origin" : '*'
//     })
//     // return res.redirect('contact1')
// });

router.get("/cutsize", (req, res) => {
  res.render("cutsize", {
    title: "CutSize Page",
  });
});
router.get("/dungari", (req, res) => {
  res.render("dungari", {
    title: "Dungari Page",
  });
});
router.get("/getAquote", (req, res) => {
  res.render("getAquote", {
    title: "getAquote Page",
  });
});
router.get("/kumari", (req, res) => {
  res.render("kumari", {
    title: "Kumari Page",
  });
});
router.get("/services", (req, res) => {
  res.render("services1", {
    title: "My Service Page",
  });
});
router.get("/specialdesign", (req, res) => {
  res.render("specialdesign", {
    title: "SpecialDesign Page",
  });
});

// router.post('/submit-form', function (req, res) {
//     const { name, email, message } = req.body;
//     const newData = new Data({
//       name: name,
//       email: email,
//       message: message
//     });
//     newData.save(function (err) {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error saving data to database.');
//       } else {
//         res.send('Data saved to database.');
//       }
//     });
// });

router.post("/signup", async (req, res) => {
  //using post routes here
  try {
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var msg = req.body.msg;

    var data = {
      name: name,
      email: email,
      msg: msg,
    };

    const user = await User.create(data);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }

  // return res.redirect('');
});

module.exports = router;
