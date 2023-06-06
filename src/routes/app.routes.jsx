import { Routes, Route } from "react-router-dom";

import { MoviePreview } from "../pages/MoviePreview";
import { CreateMovie } from "../pages/CreateMovie";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<MoviePreview />} />
    </Routes>
  )
}