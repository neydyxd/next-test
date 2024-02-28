import { MenuProvider } from '../context/MenuContext';

function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default App;