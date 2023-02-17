import { Route, Routes as RoutesDom } from "react-router-dom";

import Home from '../pages/home/Home';
import Recipes from '../pages/recipes/Recipes'
import About from '../pages/about/About'

const Routes = () => {
  return (
    <RoutesDom>
    <Route path="/" element={<Home />} />
    <Route path="recipes" element={<Recipes />} />
    <Route path="about" element={<About />} />
  </RoutesDom>
  )
}

export default Routes