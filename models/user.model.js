const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', async function (next) {
  try {
    const user = this;

    if (!user.isModified('Password')) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.Password, salt);
    this.Password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await User.findById(this._id).select('+Password').exec().then((user) => {
      return bcrypt.compare(newPassword, user.Password);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("MobileUser", userSchema);

module.exports = User;