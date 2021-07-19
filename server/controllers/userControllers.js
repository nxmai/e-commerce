const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {

  let errors = {email: '', password: '', name: ''};

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  if(err.code === 11000){
    errors.email = 'Email is already registered';
    return errors;
  }

  if(err.message.includes('users validation failed')){
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

const userCtrl = {
  register: async (req, res) => {
    
    const { name, email, password } = req.body;

    try {
      //password encryption
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      const user = await newUser.save();

      const accessToken = createAccessToken({ id: newUser._id });
      const refreshToken = createRefreshToken({ id: newUser._id });

      res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        maxAge: 7*24*60*60*1000 
      })

      res.status(201).json({token: accessToken, user: user._id});

    } catch (error) {
      
      const errors = handleErrors(error);
      res.status(400).json( { errors } );
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) throw Error('incorrect email');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('incorrect password');

      //login success => create access token and refresh token
      const accessToken = createAccessToken({ id: user._id });
      const refreshToken = createRefreshToken({ id: user._id });

      res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        maxAge: 7*24*60*60*1000 
      })

      res.json({ token: accessToken, user: user._id });
    } catch (error) {

      const errors = handleErrors(error);
      res.status(400).json({ errors });
    }
  }, 

  refreshToken: (req, res) => {
    try {
      const refreshToken = req.cookies['refreshtoken'];
      // console.log('refreshtoken', refreshToken );

      if (!refreshToken) return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify( refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err) return res.status(400).json({ msg: "Please Login or Register fail" });

          const accessToken = createAccessToken({ id: user.id });

          res.json({ token: accessToken });
        }
      );
    } catch (error) {
      return res.status(500).json({msg: error.message})
    }
  },

  logout: (req, res) => {
    try {
     res.clearCookie('refreshtoken')
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

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      if(!user) return res.status(400).json({msg: "User does not exist."})

      res.json(user)

    } catch (error) {
      return res.status(500).json({msg: error.message})
    }
  }
};

module.exports = userCtrl;
