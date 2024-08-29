import Email from "@/entities/email";
import User from "@/entities/user";
import { HTTPError } from "@/util/http-error";
import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export function generateToken(user: any) {
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
    } else if (username == "") {
        res.status(400).json({
            message: "Please create a username"
        })
    } else {
        newUser.setUsername(username);
    }
    
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
            accountStatus: "active",
            role: 1

        }
    })
    console.log(user);
    generateToken(newUser);
    const activityId = await createActivityId();
    const timestamp = new Date();
    createLogActivity(
        userId, 
        userUsername, 
        activityId, 
        "user registration", 
        "registration", 
        `new user registration`, 
        timestamp, 
        `new user ${userUsername} has been registered`, 
        res
    );
    return user;

}

async function createActivityId(): Promise<string> {
    let activityId;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    // format: 23v04QbN
    const randomNumber = Math.floor(Math.random() * 10);
    const randomUppercase = Math.floor(Math.random() * uppercase.length);
    const randomLowercase = Math.floor(Math.random() * lowercase.length);

    activityId = `${randomNumber}${randomNumber}${randomLowercase}${randomNumber}${randomNumber}${randomUppercase}${randomLowercase}${randomUppercase}`;

    return activityId;
}

async function createLogActivity(
    userId: any, 
    username: string,
    activityId: string,
    activityName: string,
    activityType: string,
    activityDetails: string,
    activityDate: any,
    message: string,
    res: NextApiResponse
): Promise<any> {
    const newUserActivity = await prisma.account_activity.create({
        data: {
            userId: userId,
            username: username,
            activityId: activityId,
            activityName: activityName,
            activityType: activityType,
            activityDetails: activityDetails,
            activityDate: activityDate,
            accountMessage: message
        }
    })
    console.log(newUserActivity);
    res.status(201).json({
        message: `new user activity for ${username} has been created`,
        data: newUserActivity
    })
    return newUserActivity;
}

export async function loginUser(
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

export async function redirectUser(res: NextApiResponse, username: string): Promise<any> {
    
}

export async function deleteAccount(id: number, username: string, res: NextApiResponse): Promise<any> {
    const user = await prisma.users.delete({
        where: {
            id: id
        }
    })
    console.log(user);
    res.status(200).json({ message: `user ${username} has been deleted` });
    return user;

}

export async function changePassword(username: string, res: NextApiResponse): Promise<any> {

}
