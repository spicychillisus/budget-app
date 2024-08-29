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

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 w-screen min-h-screen">
            <div className="flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Card className="w-[500px]">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Get Started</CardTitle>
                        <CardDescription className="text-center">
                            Login with your account to get started
                        </CardDescription>
                        <CardContent>
                            <form className="pt-4">
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className="text-left">Username</Label>
                                    <Input id="username" placeholder="Username" name="username"/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password" className="text-left">Password</Label>
                                    <Input id="password" placeholder="Enter password" type="password" name="password"/>
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
        </div>
        
    )
}

export default Login;
