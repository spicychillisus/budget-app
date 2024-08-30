import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SaveEfficiently() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Easy Saving</CardTitle>
                    <CardDescription className="text-center">
                        Save your money in an easier way.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-center text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Fugit obcaecati cum ullam aut dolorum praesentium, ab recusandae, nisi 
                    adipisci veritatis quis tenetur, quibusdam sed impedit voluptate saepe harum. Et, ut.
                </CardContent>
            </Card>
        </div>
    )
}