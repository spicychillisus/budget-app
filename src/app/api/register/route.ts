const { PrismaClient } = require('@prisma/client');
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/entities/user";
import { registerUser } from "@/app/controllers/userController";

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;


    if (req.method == "POST") {
        registerUser(username, firstName, lastName, email, birthday, password, res)
        .then((user) => {
            console.log(user);
            res.status(200).json(user)
            console.log(`registered!`)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: "Internal server error" });
        })
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }

}
