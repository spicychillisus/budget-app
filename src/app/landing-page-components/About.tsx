import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const About = () => {
    return (
        <div className="flex justify-center">
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle className="text-2xl">Who are we?</CardTitle>
                    <CardDescription>
                        We are a team of passionate people who aim to make money saving much more easier. 
                        We provide you the tools needed to track your spending and save money.
                    </CardDescription>
            </CardHeader>        
            <CardContent>
                <CardTitle className="text-2xl">How we work</CardTitle>
                <CardDescription>
                    Create an account to start your journey in saving money with us.
                </CardDescription>
            </CardContent>
        </Card>
        </div>
    )
}

export default About;