"use client"
import { cookies } from "next/headers";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

async function generateRandomUsernames() {
    
}

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setFormAction] = useState('');
}

