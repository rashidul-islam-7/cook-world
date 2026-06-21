
import React from 'react';
import HomeHero from "@/components/HomePage/HomeHero";
import FeaturedRecipes from '@/components/HomePage/FeaturedRecipes';
import PopularRecipes from '@/components/HomePage/PopularRecipes';
import PremiumGiftOffer from '@/components/HomePage/PremiumGiftOffer';
import JoinCommunity from '@/components/HomePage/JoinWithUs';
import LoadingPage from '@/components/Loading';

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

      <PremiumGiftOffer />

      <JoinCommunity />

      <LoadingPage />

    </div>
  );
};

export default HomePage;