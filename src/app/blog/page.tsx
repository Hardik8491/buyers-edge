import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="w-full">
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Buyers Edge: Revolutionizing the Ecommerce Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Discover how Bures Edge is transforming the way you shop online.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Image
                  alt="Author"
                  className="rounded-full mr-2"
                  height={40}
                  src="/buyer512.png"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width={40}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  John Doe, Bures Edge Web Designer
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-400">|</span>
              <span className="text-gray-600 dark:text-gray-400">
                June 9, 2024
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <h2>Introducing Bures Edge: The Future of Ecommerce</h2>
          <p>
            Bures Edge is a revolutionary ecommerce platform that is
            transforming the way businesses and customers interact online. With
            its cutting-edge technology and intuitive user experience, Bures
            Edge is redefining the ecommerce landscape.
          </p>
          <h3>Seamless Shopping Experience</h3>
          <p>
            At the heart of Bures Edge is a commitment to providing a seamless
            and enjoyable shopping experience for customers. From the moment
            they land on the website to the final checkout process, Bures Edge
            ensures that every step is optimized for efficiency and convenience.
          </p>
          <h3>Powerful Analytics and Insights</h3>
          <p>
            Bures Edge also offers powerful analytics and insights that empower
            businesses to make data-driven decisions. With real-time tracking of
            customer behavior, sales trends, and inventory management,
            businesses can gain a deeper understanding of their customers and
            optimize their operations accordingly.
          </p>
          <h3>Scalable and Secure</h3>
          <p>
            Bures Edge is built on a scalable and secure infrastructure,
            ensuring that businesses can handle high traffic and transaction
            volumes without compromising on performance or security. This allows
            businesses to focus on growth and innovation, rather than worrying
            about the technical aspects of their ecommerce platform.
          </p>
          <h2>Revolutionizing the Ecommerce Landscape</h2>
          <p>
            Bures Edge is poised to become the leading ecommerce platform for
            businesses of all sizes. With its innovative features, seamless user
            experience, and powerful analytics, Bures Edge is redefining the way
            businesses and customers interact in the digital marketplace.
          </p>
          <h2>Bures Edge Blog</h2>
          <p>
            Discover the latest insights and trends in the world of ecommerce on
            the Bures Edge blog. From product category highlights to expert
            interviews with our web designers, our blog is your go-to resource
            for staying ahead of the curve.
          </p>
          <h3>Product Categories</h3>
          <ul>
            <li>Clothing and Accessories</li>
            <li>Electronics and Gadgets</li>
            <li>Home and Garden</li>
            <li>Beauty and Personal Care</li>
            <li>Sports and Outdoor</li>
          </ul>
          <h3>Meet the Bures Edge Web Designer</h3>
          <div className="flex items-center space-x-4">
            <img
              alt="John Doe"
              className="rounded-full"
              height={80}
              src="/buyer512.png"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <div>
              <h4 className="font-bold">John Doe</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Lead Web Designer, Bures Edge
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: john.doe@buresedge.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 555-1234-5678
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Create Your Ecommerce Store with Bures Edge
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get started with Bures Edge today and take your business to the
              next level.
            </p>
            <div className="flex justify-center">
              <Button className="animate-bounce transition-transform duration-500 hover:scale-110">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 dark:bg-gray-950 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100 mb-4">
              Bures Edge in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              See how Bures Edge is transforming ecommerce for businesses like
              yours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6 shadow-lg animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <img
                    alt="Customer"
                    className="rounded-full mr-4"
                    height={48}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width={48}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-100">
                      Sarah Johnson
                    </h3>
                    <p className="text-gray-400">Clothing Store Owner</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  "Bures Edge has been a game-changer for my clothing store.\n
                  The platform's intuitive design and powerful analytics\n have
                  helped me streamline my operations and better\n understand my
                  customers."
                </p>
                <Button variant="secondary">Read More</Button>
              </div>
              <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6 shadow-lg animate-fade-in-up delay-100">
                <div className="flex items-center mb-4">
                  <img
                    alt="Customer"
                    className="rounded-full mr-4"
                    height={48}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width={48}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-100">
                      Michael Chen
                    </h3>
                    <p className="text-gray-400">Electronics Store Owner</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  "Bures Edge has been a game-changer for my electronics\n
                  store. The platform's scalability and security features\n have
                  allowed me to focus on growing my business without\n worrying
                  about the technical aspects."
                </p>
                <Button variant="secondary">Read More</Button>
              </div>
              <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6 shadow-lg animate-fade-in-up delay-200">
                <div className="flex items-center mb-4">
                  <img
                    alt="Customer"
                    className="rounded-full mr-4"
                    height={48}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width={48}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-100">
                      Emily Patel
                    </h3>
                    <p className="text-gray-400">Home Decor Store Owner</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  "Bures Edge has been a game-changer for my home decor\n store.
                  The platform's powerful analytics and personalization\n
                  features have helped me better understand my customers and\n
                  deliver a more tailored shopping experience."
                </p>
                <Button variant="secondary">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Start Your Ecommerce Journey with Bures Edge
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Sign up today and experience the power of Bures Edge.
            </p>
            <div className="flex justify-center">
            <Link href="/auth/Sign">
            <Button  variant="default" className="animate-pulse px-4  transition-transform duration-500 hover:scale-110">
                Sign Up
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
