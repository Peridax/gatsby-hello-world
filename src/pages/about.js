import React from "react"
import Header from "../components/header"
import Home from './index'

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header text="About Gatsby" />
      <Header text="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}
