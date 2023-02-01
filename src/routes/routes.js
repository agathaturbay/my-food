import { Route, Routes as RoutesDom } from "react-router-dom";

import Home from '../pages/Home';
import Recipes from '../pages/Recipes'

const Routes = () => {
  return (
    <RoutesDom>
    <Route index element={<Home />} />
    <Route path="recipes" element={<Recipes />} />
  </RoutesDom>
  )
}

export default Routes