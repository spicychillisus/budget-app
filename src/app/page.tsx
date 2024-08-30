"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "./reusable/Navbar"
import EasySaving from "./landing-page-components/EasySaving"
import SaveEfficiently from "./landing-page-components/SaveEfficiently"
import TrackYourExpenses from "./landing-page-components/TrackYourExpenses"

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
              </div>
              <div>
                <h2 className="text-center pt-2 font-semibold text-3xl">Our Functionalities</h2>
                <p className="text-center text-md">Choose from a variety of functionalities that we offer to help you save your money</p>
                  <div className="mt-2 flex mx-auto">
                        <Tabs defaultValue="easy-saving" className="w-[400px] mx-auto">
                          <TabsList>
                            <TabsTrigger value="easy-saving">Easy Saving</TabsTrigger>
                            <TabsTrigger value="track-your-expenses">Track Your Expenses</TabsTrigger>
                            <TabsTrigger value="save-efficiently">Save Efficiently</TabsTrigger>
                          </TabsList>
                          <TabsContent value="easy-saving">
                            <EasySaving />
                          </TabsContent>
                          <TabsContent value="track-your-expenses">
                            
                          </TabsContent>
                          <TabsContent value="save-efficiently">
                            
                          </TabsContent>
                        </Tabs>
                  </div>
              </div>
              
          </div>
      </div>
    </main>
  )
}
