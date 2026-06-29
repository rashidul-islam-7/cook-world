export const metadata = {
  title: "Home | CookWorld",
};
import React from 'react';
import HomeHero from "@/components/HomePage/HomeHero";
import FeaturedRecipes from '@/components/HomePage/FeaturedRecipes';
import PopularRecipes from '@/components/HomePage/PopularRecipes';
import PremiumGiftOffer from '@/components/HomePage/PremiumGiftOffer';
import JoinCommunity from '@/components/HomePage/JoinWithUs';
import LoadingPage from '@/components/Loading';
import BrowseRecipesPage from './recipes/page';

const HomePage = () => {
  return (
    <div>
     <section className='pt-10'>
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

   

    </div>
  );
};

export default HomePage;