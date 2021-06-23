const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var refreshTokens = [];

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email already exists" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at least 6 characters long." });

      //password encryption
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      const saveUser = await newUser.save();
      res.json(saveUser);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      const accessToken = createAccessToken({ id: user._id });
      const refreshToken = createRefreshToken({ id: user._id });

      refreshTokens.push(refreshToken);
      console.log('login', refreshTokens);

      res.json({ accessToken, refreshToken });
      // res.header('auth-token', accesstoken).send(accesstoken);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  refreshToken: (req, res) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) return res.status(400).json({ msg: "Please Login or Register" });

      if (!refreshTokens.includes(refreshToken)) return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify( refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err) return res.status(400).json({ msg: "Please Login or Register" });

          const accessToken = createAccessToken({ id: user.id });

          res.json({ accessToken });
        }
      );
    } catch (error) {
      return res.status(500).json({msg: error.message})
    }
  },

  logout: (req, res) => {
    try {
      refreshTokens = refreshTokens.filter(token => token !== req.body.refreshToken)
      console.log('logout', refreshTokens);
      return res.json({msg: "Logged out"})

    } catch(error){
      return res.status(500).json({msg: error.message})
    }
  },

  addCart: (req, res) => {
    res.json({
      cart: {
        title: "cart",
        status: "success",
      },
    });
  },
};

module.exports = userCtrl;
