import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"

export default function NavBar() {
  return (
    <NavigationMenu className="w-full px-6 py-6 mx-auto flex max-w-2xl items-center justify-between">
      <NavigationMenuList className="flex items-center gap-8 text-foreground text-sm font-medium uppercase tracking-wide no-underline">
        <NavigationMenuItem>
          <NavigationMenuLink className="text-foreground font-bold hover:underline mr-40" href="/">Clément Bosle</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
