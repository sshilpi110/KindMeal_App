import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDirectory from "../components/AddDirectory";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Article from "../Pages/Article";
import Articles from "../Pages/Articles";
import Directory from "../Pages/Directory";

import Help from "../Pages/Help";
import Home from "../Pages/Home";
import HotPicks from "../Pages/HotPicks";
import Join from "../Pages/Join";
import JoinShop from "../Pages/JoinShop";
import JoinSuccess from "../Pages/JoinSuccess";
import KindMoment from "../Pages/KindMoment";
import KindMoments from "../Pages/KindMoments";
import Logout from "../Pages/LogOut";
import MealDeal from "../Pages/MealDeal";
import MealDeals from "../Pages/MealDeals";
import Recipe from "../Pages/Recipe";
import Recipes from "../Pages/Recipes";
import UserProfile from "../Pages/UserProfile";
const MainRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<MealDeals />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinshop" element={<JoinShop />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/help" element={<Help />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/addshop" element={<AddDirectory />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/hotpicks" element={<HotPicks />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/kindmoments/:id" element={<KindMoment />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/deals/:id" element={<MealDeal />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
