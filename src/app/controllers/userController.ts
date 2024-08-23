import Email from "@/entities/email";
import User from "@/entities/user";
import { HTTPError } from "@/util/http-error";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

function generateToken(user: User) {
    try {
        const token = jwt.sign({
            userId: user.getUserId(),
            username: user.getUsername(),
            email: user.getEmail()
        }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return token;
    } catch (error) {
        console.log(error);
        throw new HTTPError("Internal server error", 500);
    }
}

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

async function checkExistingEmail(email: string, userId: string): Promise<boolean> {
    const userEmail = await prisma.users.findUnique({
        where: {
            email: email,
            userId: userId
        }
    })
    if (userEmail) {
        return true;
    } else {
        return false;
    }
}

let newUser = new User();
export async function registerUser(
    username: string,
    firstName: string,
    lastName: string,
    email: Email,
    birthday: Date,
    password: string,
    res: NextApiResponse
): Promise<any> {

    
    if (await checkExistingUsername(username) == true) {
        res.status(400).json({ message: "Username already exists" });
        return;
    } 
    newUser.setUsername(username);
    newUser.setFirstName(firstName);
    newUser.setLastName(lastName);
    if (await checkExistingEmail(email.toString(), newUser.getUserId()) == true) {
        res.status(400).json({ message: "Email already exists" });
        return;
    }
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
    generateToken(newUser);
    return user;

}



export async function loginUser(
    req: NextApiRequest, 
    res: NextApiResponse,
    username: string,
    password: string
): Promise<any> {
    //TODO: create the handling code for log in
    const userName = await prisma.users.findUnique({
        where: {
            username: username
        }
    })

    if (!userName) {
        res.status(400).json({ message: "Username does not exist" });
        return;
    }
    
    const comparePassword = await bcrypt.compare(password, userName.password);
    if (!comparePassword) {
        res.status(400).json({ message: "Invalid password" });
        return;
    }
    generateToken(newUser);
    
}

