// Load the dotenv package
const dotenv = require("dotenv");

// Determine the environment and load the appropriate .env file
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

const crypto = require("crypto");
const cryptPass = process.env.cryptPass;

const encrypt3DES = (data, key) => {
  let md5Key = crypto.createHash("md5").update(key).digest();

  md5Key = Buffer.concat([md5Key, md5Key.slice(0, 8)]);

  const cipher = crypto.createCipheriv("des-ede3-ecb", md5Key, "");

  let encrypted = cipher.update(data, "utf8", "base64");

  encrypted += cipher.final("base64");

  return encrypted;
};

console.log("result:", encrypt3DES("291", cryptPass));
console.log("result:", encrypt3DES("721", cryptPass));
console.log("result:", encrypt3DES("967", cryptPass));
console.log("result:", encrypt3DES("974", cryptPass));
console.log("result:", encrypt3DES("2753", cryptPass));
console.log("result:", encrypt3DES("2898", cryptPass));
console.log("result:", encrypt3DES("4656", cryptPass));
