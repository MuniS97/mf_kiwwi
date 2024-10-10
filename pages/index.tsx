import { Container } from "@/components/server/Container";
import TranslateContext from "@/contexts/useTranslation";
import { useContext } from "react";

export default function Home() {
  const { main: translation } = useContext(TranslateContext);
  return (
    <Container>
      {translation.hero.title}
    </Container>
  );
}
