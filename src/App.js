import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>This is Home page</h2>;
}

function About() {
  return <h2>This is About page</h2>;
}

function Contact() {
  return <h2>This is Contact page</h2>;
}

function NotFound() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>{' '}
      <Routes>
      <Route exact path="/"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/contact"element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
