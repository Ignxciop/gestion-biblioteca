import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../models/user.model.js";
import { token_jwt } from "../config/config.js";

export async function registerUser({ fullname, email, password, rol_id }) {
    const userExist = await findUserByEmail(email);
    if (userExist) throw new Error("Email created before");

    const hashedPassword = await bcrypt.hash(password, 10);

    return await createUser({
        fullname,
        email,
        password: hashedPassword,
        rol_id,
    });
}

export async function loginUser({ email, password }) {
    const user = await findUserByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user.id, email: user.email }, token_jwt, {
        expiresIn: "1d",
    });

    return {
        token,
        user: { id: user.id, name: user.fullname, email: user.email },
    };
}
