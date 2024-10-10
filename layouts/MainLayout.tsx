import { Container } from "@/components/server/Container";
import { Footer } from "@/components/server/Footer";
import { Header } from "@/components/server/Header";
import { TopHeader } from "@/components/server/TopHeader";
import { Toaster } from "@/components/ui/toaster";
import TranslateContext from "@/contexts/useTranslation";
import { useContext } from "react";


type Layout = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Layout) => {
    const translation = useContext(TranslateContext);

    return (
        <>
            <TopHeader translation={translation?.header} />
            <Container>
                <Header translation={translation?.header} />
                <main>{children}</main>
                <Footer translation={translation?.footer} />
                <Toaster />
            </Container >
        </>
    );
};

export default MainLayout;
