import { EmptyLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models/index';
import '@/styles/globals.css';
import { createEmotionCache, theme } from '@/utils/mui';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps: { session, ...pageProps }, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
    
    const Layout = Component.Layout ?? EmptyLayout

    return (
      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}> */}
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                {/* </SWRConfig> */}
            </ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    )
}

export default App

