"use client";

import Link from "next/link";
import classess from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classess.active} ${classess.link}`
          : classess.link
      }
    >
      {children}
    </Link>
  );
}
