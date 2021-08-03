import React from 'react'
import { nav,Button, Col, Container, Form, Row } from "react-bootstrap";

export default function EmployeeDashboard() {
    return (
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome Employee!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link" href="#">POS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Edit Account info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">LogOut</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    )
}
