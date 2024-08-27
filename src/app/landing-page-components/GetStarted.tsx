"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

function formAction(formData: any) {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    console.log(username);
}

const GetStarted = () => {

    const [password, showPassword] = useState(false)

    

    return (
        <div className="flex justify-center">
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle className="text-2xl">Get Started</CardTitle>
                <CardDescription>Register an account with us today to start saving!</CardDescription>
                <CardContent>
                    <form className="pt-4" action={formAction}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="text-left">Username</Label>
                            <Input id="username" placeholder="Username" name="username"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="text-left">Email</Label>
                            <Input id="email" placeholder="Email" type="email" name="email"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password" className="text-left">Password</Label>
                            <Input id="password" placeholder="Enter password" type="password" name="password"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirmPassword" className="text-left">Confirm Password</Label>
                            <Input id="confirmPassword" placeholder="Confirm password" type="password" name="confirmPassword"/>
                        </div>
                        {/* <Button id="registerBtn" type="submit">Register</Button> */}
                    </div>
                    </form>
                </CardContent>        
                <CardFooter className="flex justify-center">
                    <Button id="registerBtn" type="submit">Register</Button>
                </CardFooter>
            </CardHeader>
        </Card>
        </div>
    )
}

export default GetStarted