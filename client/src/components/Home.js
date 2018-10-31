import * as React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">Valerie's Recipe Collection</h1>
      <Link to="/recipes" style={{ textDecoration: 'none' }} class="btn btn-primary btn-xl js-scroll-trigger">See all recipes</Link>
    </div>
    <div class="overlay"></div>
  </header>)
}