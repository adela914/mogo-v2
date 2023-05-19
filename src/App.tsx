import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GlobalStyle, PageWrapper, Wrapper } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </Wrapper>
    </>
  )
}
export default App
