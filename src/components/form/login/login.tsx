import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }, [error]);

    
}