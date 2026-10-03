import Link from "next/link";
import classess from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/FD";
import { Suspense } from "react";

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
