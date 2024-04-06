import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { CustomTheme } from "@/utils/CustomTheme";
import FoodProvider from "@/context/FoodContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FoodProvider>
      <CustomTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomTheme>
    </FoodProvider>
  );
};

export default App;
