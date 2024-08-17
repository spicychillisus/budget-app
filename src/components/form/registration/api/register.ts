import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const numeridId = Math.floor(Math.random() * 1000000);
    const letterId = Math.random().toString(36).substr(2, 9);

    // Function to shuffle the characters in a string
    function shuffleString(str: string): string {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    const shuffledLetterId = shuffleString(letterId);
    const userId = `${numeridId}${shuffledLetterId}`;

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const age = req.body.age;
    const birthday = req.body.birthday;
    const password = req.body.password;

    if (req.method === 'POST') {
        try {
            const user = await prisma.users.create({
                data: {
                    name: name,
                    username: username,
                    email: email,
                    age: age,
                    birthday: birthday,
                    password: password,
                    userId: userId

                }
            })
            res.status(200).json(user);
            console.log(user);
        } catch (error) {
            res.status(400).json({ message: 'Something went wrong. Please try again!' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}