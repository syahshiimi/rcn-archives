import React from "react"

import Layout from "../components/Layout"

const error404 = () => {
  return (
    <Layout>
      <main className="error-page">
        <h1>Error Page</h1>
        <h3>Page not found</h3>
      </main>
    </Layout>
  )
}

export default error404
