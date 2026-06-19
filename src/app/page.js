
import React from 'react';
import HomeHero from "@/components/HomePage/HomeHero";
import FeaturedRecipes from '@/components/HomePage/FeaturedRecipes';

const HomePage = () => {
  return (
    <div>
     <section>
      <HomeHero />
     </section>
     <section>
      <FeaturedRecipes />
     </section>
    </div>
  );
};

export default HomePage;