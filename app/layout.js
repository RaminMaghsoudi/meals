import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

// export const metadata = {
//   title: "Meals - Create Next App",
//   description: "Delicious meals, shared by a food-loving community",
// };
export const metadata = {
  title: "Meals - Create Next App",
  description: "Delicious meals, shared by a food-loving community",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
