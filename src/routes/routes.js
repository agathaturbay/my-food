import { Route, Routes as RoutesDom } from "react-router-dom";

import Home from '../pages/home/Home';
import Recipes from '../pages/recipes/Recipes'

const Routes = () => {
  return (
    <RoutesDom>
    <Route path="/" element={<Home />} />
    <Route path="recipes" element={<Recipes />} />
  </RoutesDom>
  )
}

export default Routes