import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Header from "@component/src/components/Header/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Big mart</title>
        <meta name="description" content="Generated by Big mart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

    </>
  )
}
