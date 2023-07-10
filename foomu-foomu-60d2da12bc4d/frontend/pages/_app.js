import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavigationBar from '../src/components/Navigation/NavigationBar.tsx';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider>
      {router.pathname !== '/' && <NavigationBar />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
