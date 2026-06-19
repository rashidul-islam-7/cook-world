
import React from 'react';
import HomeHero from "@/components/HomePage/HomeHero";
import FeaturedRecipes from '@/components/HomePage/FeaturedRecipes';
import PopularRecipes from '@/components/HomePage/PopularRecipes';

const HomePage = () => {
  return (
    <div>
     <section>
      <HomeHero />
     </section>
     <section>
      <FeaturedRecipes />
     </section>
     <section>
      <PopularRecipes />
     </section>
    </div>
  );
};

export default HomePage;