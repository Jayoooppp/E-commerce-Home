import Logo from "../public/logo.png"
import home from "../public/home.png"
import Image from "next/image"
import admin from "../public/admin.svg"
import cart from "../public/cart.svg"
export default function Home() {

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ]

  return (
    <>
      <div className="bg-slate-300  min-h-screen">
        <header>
          <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
            <a href="javascript:void(0)">
              <Image
                src={Logo}
                width={150}
                height={70}
                alt="logo"
              />

            </a>
          </nav>
        </header>
        <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 mt-10">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-black font-bold text-4xl xl:text-5xl">
              One stop shop<br />
              <span className="text-indigo-800"> For all your needs</span>
            </h1>
            <p className="text-gray-800 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Welcome to our online marketplace, where convenience meets quality. Explore a wide range of products carefully selected to cater to your diverse needs.            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a href="https://e-commerce-admin-nine.vercel.app/Auth" target="_blank" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                <div className="items-center  space-y-3 flex justify-between text-lg">
                  <Image src={admin} className="mr-2 w-6 h-6" />
                  Admin
                </div>
              </a>
              <a href="https://e-commerce-customer.vercel.app/" target="_blank" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                <div className="items-center  space-y-3 flex justify-between text-lg">
                  <Image src={cart} className="mr-2 w-5 h-5" />
                  Customer
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 text-center  lg:mt-0 lg:ml-1">
            <Image src={home} className="w-full mx-auto sm:w-12/14  lg:w-full ml-16" />
          </div>
        </section>
      </div>
    </>
  )
}
