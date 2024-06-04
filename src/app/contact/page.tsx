/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GwReOhz6oJO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Dark from "../../../public/dark.svg";
import Light from "../../../public/light.svg";
export default function Component() {
  return (
    <>
      <section className="w-full bg-primary/10 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <div className="flex justify-center items-center gap-2" >
            <Dark className="h-20 w-20 hidden dark:block text-primary" />
            <Light className="h-20 w-20 dark:hidden text-primary" />
            <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Buyer`s <span className="text-primary">Edge</span>
        </span>
          </div>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Connecting buyers and sellers with the power of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Have a question or need assistance? Fill out the form below and
                we`ll get back to you as soon as possible.
              </p>
              <form className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
                <Button className="w-full sm:w-auto" type="submit">
                  Submit
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Find us at our office or get in touch with us by phone or email.
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    123 Main Street, Anytown USA
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    +1 (555) 555-5555
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    support@buyersedge.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
