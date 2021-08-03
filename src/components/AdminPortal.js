import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { nav, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function AdminPortal() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome Admin!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/addproduct">
                  Add Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/editproduct">
                  Edit Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  LogOut
                </a>
              </li>
              {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
