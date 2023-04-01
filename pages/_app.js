import '@component/styles/globals.css'
import MainLayout from "@component/Layout/MainLayout";

export default function App({ Component, pageProps }) {
  return(
  <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>


  </>
  )
}
