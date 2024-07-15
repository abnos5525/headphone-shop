import { Vazirmatn } from "next/font/google";
import "./globals.css";
import MyApp from "@/_app";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const inter = Vazirmatn({ subsets: ["arabic"], display:"swap" });

export const metadata = {
  title: "هدفونشاپ",
  description: "Created by Abnos",
}

const RootLayout = ({children}) => {
  return (
      <html lang="fa" dir="rtl">
          <body className={inter.className}>
              <MyApp>
                <Header/>
                {children}
                <Footer/>
              </MyApp>
          </body>
      </html>
  )
}

export default RootLayout
