import Image from "next/image";
import classess from "./page.module.css";
import { Box } from "@mui/material";
import { getMeal } from "@/lib/FD";
import { notFound } from "next/navigation";
import { Description } from "@mui/icons-material";

export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);
  if (!meal) notFound();
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function ShareMealPage({ params }) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);
  if (!meal) notFound();
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classess.header}>
        <Box className={classess.image}>
          <Image src={meal.image} alt={meal.title} fill />{" "}
        </Box>
        <Box className={classess.headerText}>
          <h1>{meal.title}</h1>
          <p className={classess.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classess.summary}>{meal.summary}</p>
        </Box>
      </header>
      <main>
        <p
          className={classess.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
