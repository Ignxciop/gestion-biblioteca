import jwt from "jsonwebtoken";
import { token_jwt } from "../config/config.js";

export function authRequired(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token required" });

    try {
        const decoded = jwt.verify(token, token_jwt);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: "Token invalid" });
    }
}
