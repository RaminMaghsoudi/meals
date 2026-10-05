import Link from "next/link";
import classess from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/FD";
import { Suspense } from "react";

// export const metadata = {
//   title: "All Meals",
//   description: "Now show All Meals",
// };
export const metadata = {
  title: "All Meals",
  description: "Create & Show All Meals Delicious",
  generator: "Next.js",
  applicationName: "Meals",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "TESSA" }, { name: "TESSA", url: "Tessa24.com" }],
  creator: "Ramin Maghsoudi",
  publisher: "DSC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

async function Meals() {
  const GM = await getMeals();
  return <MealsGrid meals={GM} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classess.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classess.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, It is easy and fun!
        </p>
        <p className={classess.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<p className={classess.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
