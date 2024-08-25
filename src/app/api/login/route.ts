import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/entities/user";
import { cookies } from 'next/headers'
import { loginUser } from "@/app/api/controllers/userController";
const jwt = require("jsonwebtoken");

export async function login(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username;
    const password = req.body.password;

    if (req.method == "POST") {
        loginUser(res, username, password)
        .then((user) => {
            console.log(user);
            res.status(200).json(user)
            console.log(`logged in user ${username}!`)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: "Internal server error" });
        })
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
    
}

