import { EmptyLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models/common';
import '@/styles/globals.css';
import { createEmotionCache, theme } from '@/utils/mui';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
    
    const Layout = Component.Layout ?? EmptyLayout

    return (
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
    )
}

export default App

