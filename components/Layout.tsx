import Navbar from "./Navbar";
import { PropsWithChildren } from "react";

function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
