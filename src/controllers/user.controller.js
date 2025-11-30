import { registerUser, loginUser } from "../services/user.service.js";

export async function register(req, res) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function login(req, res) {
    try {
        const result = await loginUser(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.mesage });
    }
}
