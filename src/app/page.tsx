"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
/* import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu" */
import Navbar from "./landing-page-components/Navbar"
import About from "./landing-page-components/About"
import GetStarted from "./landing-page-components/GetStarted"



export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 w-screen min-h-screen">
          <Navbar />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center text-center">
                  <h1 className="font-semibold text-3xl">Save your money without complications</h1>
                  <p className="text-md">
                    Save your money with ease. We'll handle the rest.
                  </p>
                  <div className="mt-2">
                    <Tabs defaultValue="about" className="w-[400px]">
                      <TabsList>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="sign-up">Get Started</TabsTrigger>
                      </TabsList>
                      <TabsContent value="about">
                        <About />
                      </TabsContent>
                      <TabsContent value="sign-up">
                        <GetStarted />
                      </TabsContent>
                    </Tabs>

                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}
