import React from "react";
import Layout from '../components/Layout'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <Layout>
      <Nav/>
      <div><h1 className="text-6xl">hello world</h1></div> 
    </Layout>
  )
}
