import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as registerController from "@/controllers/registerController";
import User from "@/entities/user";

const prisma = new PrismaClient();
const user = new User();
const bcrypt = require('bcrypt');

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const age = req.body.age;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const userId = req.body.userId;

    

}
