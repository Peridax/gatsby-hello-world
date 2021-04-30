import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header text="Contact Me" />
      <p>This is a contact page!</p>
    </div>
  )
}
