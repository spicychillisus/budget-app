"use client"
import { Button } from "@/components/ui/button";
// TODO: to be filled when the base code from page.tsx is ready
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";




const Navbar = () => {
    return (
        <nav>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                </NavigationMenuItem>
                <Button>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </Button>
                <Button>
                    <Link href={"/register"}>
                        Register
                    </Link>
                </Button>
              </NavigationMenuList>
              
            </NavigationMenu>
          </nav>
    )
}

export default Navbar;