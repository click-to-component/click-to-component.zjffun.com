import { PageRoutes } from "@/lib/pageroutes"

export const Navigations: {
  title: string
  href: string
  external?: boolean
}[] = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  // {
  //   title: "Home",
  //   href: "https://www.rubixstudios.com.au/",
  //   external: true,
  // },
]

export const GitHubLink = {
  href: "https://github.com/click-to-component",
}
