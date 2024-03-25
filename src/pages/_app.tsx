import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { CustomTheme } from "@/utils/CustomTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomTheme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomTheme>
  );
};

export default App;
