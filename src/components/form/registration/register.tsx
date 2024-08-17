"use client"

import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormEvent } from 'react'
import { NextResponse } from "next/server";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export default function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }, [error]);

    const router = useRouter();

    async function handleSubmission(event: FormEvent) {
        event.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                username,
                email,
                age,
                birthday,
                password
            })
        })
        const data = await res.json();

        if (res.ok) {
            router.push('/register')
        } else {
            setError(data.message);
        }
    }

    return (
        <form>
            <h1>Register</h1>
            <form onSubmit={handleSubmission}>
                <div>
                    <label htmlFor="name">Name</label>
                </div>
            </form>
        </form>
    )
}