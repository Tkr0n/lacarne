import * as React from "react"
import "../styles/globals.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const components: { title: string; href: string; }[] = [
  {
    title: "Res",
    href: "/catalogo?Category=1",
  },
  {
    title: "Pollo",
    href: "/catalogo?Category=2",
  },
  {
    title: "Cerdo",
    href: "/catalogo?Category=4",
  },
  {
    title: "Premium",
    href: "/catalogo?Category=3",
  },
  {
    title: "Preparados",
    href: "/catalogo?Category=5",
  }
]

export function NavMenu() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b-2 sticky top-0 z-50 bg-zinc-950">
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden bg-transparent hover:text-rojo">
                <p className="h-6 w-6"><MenuIcon /></p>
                <span className="sr-only">Mostrar menú</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="left">
            <a href="#" className="mr-6 hidden lg:flex" >
                <p className="h-6 w-6"><MenuIcon /></p>
                <span className="sr-only">La Carne</span>
            </a>
            <div className="grid gap-2 py-6">
            <a href="/s" className="flex w-full items-center py-2 text-lg" >
                Inicio
                </a>
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-none h-full">
                    <AccordionTrigger  className="text-lg py-0">Catálogo</AccordionTrigger>
                    <AccordionContent className="ms-8">
                        <a href="/catalogo?Category=1" className="flex w-full py-2 text-lg" >
                        Res
                        </a>
                        <a href="/catalogo?Category=2" className="flex w-full py-2 text-lg" >
                        Pollo
                        </a>
                        <a href="/catalogo?Category=4" className="flex w-full py-2 text-lg" >
                        Cerdo
                        </a>
                        <a href="/catalogo?Category=3" className="flex w-full py-2 text-lg" >
                        Premium
                        </a>
                        <a href="/catalogo?Category=5" className="flex w-full py-2 text-lg" >
                        Preparados
                        </a>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
                <a href="/nosotros" className="flex w-full items-center py-2 text-lg" >
                Nosotros
                </a>
                {/* <a href="#" className="flex w-full items-center py-2 text-lg text-rojo" >
                Degacorp
                </a> */}
                <a href="/contacto" className="flex w-full items-center py-2 text-lg" >
                Contáctanos
                </a>
            </div>
            </SheetContent>
        </Sheet>
        <a href="/" className="group justify-self-start mr-6 hidden lg:flex" >
            <img src={"/Logo.svg"} className="transition-all group-hover:delay-100 group-hover:duration-500 group-hover:w-40 fill-rojo w-28"  alt="website logo" />
            {/* <p className="text-3xl Logo hover:text-4xl transition-all hover:delay-100 hover:duration-500 hover:text-rojo">La Carne</p> */}
        </a>
        <nav className="ml-auto hidden lg:flex gap-6">
            <div className="w-full flex justify-end">
                <NavigationMenu className="flex w-full justify-end">
                <NavigationMenuList>
                        <NavigationMenuItem className="">
                            <NavigationMenuTrigger className="active group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-rojo  focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-rojo dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">Catálogo</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-4">
                                {components.map((component) => (
                                    <ListItem className="active group inline-flex h-9 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-rojo  focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    >
                                    </ListItem>
                                ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/nosotros" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-rojo  focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                                Nosotros
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/contacto" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-rojo  focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                                Contáctanos
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    </header>
  )
}

function MenuIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
