import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
