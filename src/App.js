import * as React from 'react'
import { styledStyle } from 'styled-style'
import logo from './logo.svg'
import styles from './App.module.css'

const { div, header, h1, p, img } = styledStyle(styles)

const Wrapper = div('wrapper')
const Header = header('header')
const Title = h1('title')
const Intro = p('intro')
const Logo = img('logo')

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    )
  }
}

export default App
