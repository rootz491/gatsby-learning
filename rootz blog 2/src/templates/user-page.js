import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const UserPage = ({ pageContext }) => {
  return (
    <Layout>
        <p>User Page</p>
        <h3>User ID: {pageContext.id}</h3>
        <h1>{pageContext.name} {pageContext.surname}</h1>
        <p>{pageContext.email}</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UserPage;
