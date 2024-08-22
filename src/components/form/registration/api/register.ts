const { PrismaClient } = require('@prisma/client');
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/entities/user";
import { cookies } from 'next/headers'
const jwt = require("jsonwebtoken");


const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;

    async function checkExistingUsername(username: string): Promise<boolean> {
        const user = await prisma.users.findUnique({
            where: {
                username: username
            }
        })
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    
    // creates a new user and posts it to the database
    async function registerUser(): Promise<any> {

        var newUser;
        
        newUser = new User();
        if (await checkExistingUsername(username) == true) {
            res.status(400).json({ message: "Username already exists" });
            return;
        } 
        newUser.setUsername(username);
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setEmail(email);
        newUser.setBirthday(birthday);
        const setUserPassword = newUser.setPassword(password);
        newUser.generateId();
        //for debugging
        console.log(newUser);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(setUserPassword, salt);

        const userUsername = newUser.getUsername();
        const userFirstName = newUser.getFirstName();
        const userLastName = newUser.getLastName();
        const userEmail = newUser.getEmail();
        const userBirthday = newUser.getBirthday();
        const userPassword = hashedPassword;
        const userId = newUser.getUserId();
        
        const user = await prisma.users.create({
            data: {
                username: userUsername,
                firstName: userFirstName,
                lastName: userLastName,
                email: userEmail,
                birthday: userBirthday,
                password: userPassword,
                userId: userId,
                accountActivationStatus: true,
                accountStatus: "active"

            }
        })
        console.log(user);
        return user;

    }

    if (req.method == "POST") {
        registerUser()
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
