import Navbar from "./Navbar";
//import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";




const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      console.log()
      nProgress.start();
    }
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', () => nProgress.done());
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)

    }
  }, [])

  return (
    <>
      {/*<Head>*/}
      {/*<title>Mi Portafolio</title>*/}
      {/*</Head>*/}
      <Navbar />
      <main className="container py-4">
        {children}
      </main>
      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Javier Moràn Portafolio</h1>
              <p>2000 - {new Date().getFullYear()} </p>
              <p>All rights Reserver.</p>
            </div>
          </footer>
        )
      }
    </>

  )

}

export default Layout;