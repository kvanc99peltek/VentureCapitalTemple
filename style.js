/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ez8KepXQYpc
 */
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 bg-white text-black md:px-6">
        <div className="w-[150px]">
          <Link className="mr-6 hidden lg:flex" href="#">
            <SchoolIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">Temple University Fund</span>
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link className="text-black hover:text-red-500" href="#">
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link className="text-black hover:text-red-500" href="#">
                  About Us
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link className="text-black hover:text-red-500" href="#">
                  Our Portfolio
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link className="text-black hover:text-red-500" href="#">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto w-[150px]">
          <Button className="bg-red-500 text-white hover:bg-red-600">Join Us</Button>
        </div>
      </header>
      <main className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Temple University's Student-led Venture Capital Hedge Fund
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg dark:text-gray-300">
                We are a group of dedicated and passionate students investing in the future. Join us on our journey.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Your investment idea" type="text" />
                <Button type="submit">Submit</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting, you agree to our
                <Link className="underline text-red-500" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl mb-8">
            Our Story
          </h2>
          <p className="text-lg text-gray-400 md:text-xl dark:text-gray-300">
            We are a team of motivated students who believe in the power of ideas. We are committed to helping other
            students realize their innovative ideas by providing the necessary coding resources in exchange for equity.
            We believe in the potential of these ideas and are excited to be part of the journey to bring them to life.
          </p>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl mt-12 mb-8">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              alt="Gallery Image 1"
              className="object-cover h-64 w-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Gallery Image 2"
              className="object-cover h-64 w-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Gallery Image 3"
              className="object-cover h-64 w-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Gallery Image 4"
              className="object-cover h-64 w-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
      </section>
      <footer className="w-full py-6 flex justify-center items-center bg-white text-black">
        <p className="text-sm">© 2023 Temple University Student-led Venture Capital Hedge Fund</p>
      </footer>
    </>
  )
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}
