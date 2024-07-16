const bcrypt = require('bcrypt');

/*
const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
}
*/

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

const login = async(pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPassword);
  if(result){
    console.log("Logged you in!")
  } else{
    console.log("Failed. Try Again!")
  }
}

hashPassword('monkey');
