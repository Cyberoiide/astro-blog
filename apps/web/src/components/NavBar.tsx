import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"

export default function NavBar() {
  return (
    <NavigationMenu className="w-full mx-auto flex max-w-4xl items-center justify-between py-8">
      <NavigationMenuList className="flex items-center gap-8 text-foreground text-sm font-medium uppercase tracking-wide no-underline">
        <NavigationMenuItem>
          <NavigationMenuLink className="text-foreground font-bold hover:underline mr-115" href="/">Clément Bosle</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/blog">Writings</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
