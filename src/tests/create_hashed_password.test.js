import bcrypt from "bcryptjs";

const hash = await bcrypt.hash("user123", 10);
console.log(hash);
