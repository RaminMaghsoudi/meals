import Link from "next/link";
import Logo from "@/assets/logo.png";
import classess from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classess.header}>
        <Link className={classess.logo} href="/">
          {/* <img src={Logo.src} alt="A plate with food on it" /> */}
          <Image src={Logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classess.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Brows Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
