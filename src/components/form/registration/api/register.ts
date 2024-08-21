import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/entities/user";
import { cookies } from 'next/headers'


const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const userId = req.body.userId;

    async function registerUser(): Promise<any> {

        let newUser;
        
        newUser = new User();
        const userUsername = newUser.setUsername(username);
        const userFirstName = newUser.setFirstName(firstName);
        
    }

    if (req.method == "POST") {
        registerUser()
        .then((user) => {
            console.log(user);
            res.status(200).json(user)
            console.log(`registered!`)
        })
    }

}
