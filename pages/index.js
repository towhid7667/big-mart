import Head from 'next/head'

import { Inter } from 'next/font/google'
import HomePageMain from "@component/src/components/Home/HomePageMain";


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Big mart</title>
        <meta name="description" content="Generated by Big mart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
        <HomePageMain data = {data}></HomePageMain>

    </>
  )
}

export const getServerSideProps = async () => {
    const {sliderInfo} = await import('@component/data/data.json')
    console.log(sliderInfo)
    return{
        props : {
            data : sliderInfo
        }
    }
}
