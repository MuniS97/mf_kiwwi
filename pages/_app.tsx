import TranslateContext from "@/contexts/useTranslation";
import MainLayout from "@/layouts/MainLayout";
import { ru } from "@/locales/ru/ru";
import { uz } from "@/locales/uz/uz";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const { locale } = router;

  const translation = locale === "uz" ? uz : ru;

  return (
    <TranslateContext.Provider value={translation}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </TranslateContext.Provider>
  )

}
