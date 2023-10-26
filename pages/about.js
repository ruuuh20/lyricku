import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'

import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">🎵</h1>
              <div className="max-w-3xl mb-4 content">
                <p className='gray-600'>The idea for this project came from a passion for Japanese music and learning the language. I wanted to create a collection of songs preserving both the original lyrics and translations. </p>
<p>
I find that associating my study of the language with both English and Korean enhances my understanding of it. This applies to song lyrics as well.  The most difficult part for me has been learning Kanji, which is why I wanted to integrate the ability to look up Kanji in the lyrics.</p>

<p>Continuously adding: If you click on a kanji character, the definition will show up!</p>
              </div>
              
          
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
