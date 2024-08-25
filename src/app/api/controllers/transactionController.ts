import { PrismaClient } from "@prisma/client";
import { PromiseType } from "@prisma/client/extension";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export async function getAllTransactions(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    try {
        const transactions = await prisma.transactions.findMany();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function createTransaction(req: NextApiRequest, res:NextApiResponse): Promise<any> {
    const username = req.body.username;
    const userId = req.body.userId;
    const transactionName = req.body.transactionName;
    const transactionType = req.body.transactionType;
    const transactionDetails = req.body.transactionDetails;
    const transactionAmount = req.body.transactionAmount;
    const transactionDate = req.body.transactionDate;

    const transaction = await prisma.transactions.create({
        data: {
            username: username,
            transactionName: transactionName,
            transactionType: transactionType,
            transactionDetails: transactionDetails,
            trasactionAmount: transactionAmount,
            transactionDate: transactionDate,
            userId: userId
        }
    })
    console.log(transaction);
    return transaction;
}

export async function modifyTransaction(req: NextApiRequest, res: NextApiResponse) {
    // TODO: create the functions to modify the transaction
}

export async function searchTransaction(filter: string, value: any, req: NextApiRequest, res: NextApiResponse) {

}