import Image from "next/image";
import classess from "./page.module.css";
import Link from "next/link";
import { Box } from "@mui/material";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classess.header}>
        <Box className={classess.slideshow}>
          <ImageSlideshow />
        </Box>
        <Box>
          <Box className={classess.hero}>
            <h1>NextLevel Food for NextLevel Foodies.</h1>
            <p>Taste & share food from all over the world.</p>
          </Box>
          <Box className={classess.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore meals</Link>
          </Box>
        </Box>
      </header>
      <main>
        <section className={classess.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={classess.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
