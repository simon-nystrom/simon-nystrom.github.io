import Head from 'next/head'
import { useEffect } from 'react'
import styled from 'styled-components'
import '../../styles/global.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Content = styled.main`
  position: relative;
  max-width: 48em;
  padding: 2em;
  padding-bottom: 4.5em;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100%;
`

function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.copyCode) {
      window.copyCode = (el) => {
        const codeElement = el.nextSibling
        const range = document.createRange()
        range.selectNode(codeElement)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        el.innerHTML = 'Copied!'
        el.style.color = '#32e678'
        el.parentElement.addEventListener(
          'mouseleave',
          () => {
            setTimeout(() => {
              el.innerHTML = 'Copy'
              el.style.color = 'white'
            }, 200)
          },
          { once: true }
        )
      }
    }
  }, [])

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Newcurrent Blog</title>
        <meta
          name="description"
          content="Blog posts and tutorials from a software engineer with an interest in always learning new skills and technologies and to share my knowledge."
        />
      </Head>
      <NavBar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer></Footer>
    </div>
  )
}

export default App
