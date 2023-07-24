import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Accordion } from './pages/Accordion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GlobalStyle, PageWrapper, Wrapper } from './style'
import { Playground } from './pages/Playground'
import { Main } from './pages/Main'

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </Wrapper>
    </>
  )
}
export default App
