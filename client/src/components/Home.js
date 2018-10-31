import * as React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
  <div class='text-center wrapper'>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <nav class="nav nav-masthead justify-content-center">
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Uber for tickets</h1>
        <p class="lead">We want customers to offer tickets to events in Amsterdam and when you buy them, we automatically dispatch a car to pick you up to the event.</p>
        <p class="lead">
          <Link to="/recipes" style={{ textDecoration: 'none' }} class="btn btn-lg btn-secondary">See recipes</Link>
        </p>
      </main>

      <footer class="mastfoot mt-auto"> 
        <div class="inner">
          <p>Valerie</p>
        </div>
      </footer>
    </div>
      
    </div>)
}