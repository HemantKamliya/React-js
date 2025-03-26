import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Layout from './components/Layout.jsx';
import SkillsGrid from './components/Skills/SkillsGrid.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/SkillsGrid' element={<SkillsGrid/>}></Route>
     
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
