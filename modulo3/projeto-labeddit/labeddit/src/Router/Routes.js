import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLogin from '../pages/PageLogin/PageLogin';
import PageRegister from '../pages/PageRegister/PageRegister';
import PageFeed from '../pages/HomeFeed/PageFeed';
import PagePost from '../pages/PagePost/PagePost';




export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/feed/:id" element={<PageFeed/>} />
              <Route exact path="/cadastro" element={<PageRegister/>} />
              <Route exact path="/" element={<PageLogin/>} />
              <Route exact path="/detalhes/:id" element={<PagePost/>} />
          </Routes>
      </BrowserRouter>
  )
}