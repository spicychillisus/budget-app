import Image from "next/image";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



export default function Home() {
  
  async function createNewUser() {
    const newUser = await prisma.user.create({
      data: {
        name: "john",
        email: "jesus@gmail.com"
      }
    })
    console.log(newUser)
  }

  return (
    <main>
      <h1>test</h1>
      <div>
        
      </div>
    </main>
  );
}
