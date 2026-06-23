"use client";

import { FaBookOpen, FaHeart, FaThumbsUp, FaCrown } from "react-icons/fa";
import OverviewStatsCard from "./OverviewStatsCard";

export default function DashboardOverview() {
  // Demo Data
  const stats = {
    totalRecipes: 12,
    totalFavorites: 28,
    totalLikes: 156,
    isPremium: true,
  };

  return (
    <section>
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-gray-500">
          Manage your recipes, favorites and premium membership.
        </p>
      </div>

      {/* Premium Banner */}
      <div className="mb-6 overflow-hidden rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 p-5 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FaCrown className="text-yellow-200 text-xl" />
              <h2 className="text-xl font-bold">Premium Membership</h2>
            </div>

            <p className="mt-1 text-orange-50">
              Unlock unlimited recipe uploads and premium features.
            </p>
          </div>

          <span
            className={`px-5 py-2 rounded-full font-semibold ${
              stats.isPremium ? "bg-white text-orange-600" : "bg-black/20"
            }`}
          >
            {stats.isPremium ? "Premium Active" : "Free User"}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <OverviewStatsCard
          title="Total Recipes"
          value={stats.totalRecipes}
          icon={FaBookOpen}
          iconBg="bg-orange-100"
          iconColor="text-orange-500"
        />

        <OverviewStatsCard
          title="Total Favorites"
          value={stats.totalFavorites}
          icon={FaHeart}
          iconBg="bg-pink-100"
          iconColor="text-pink-500"
        />

        <OverviewStatsCard
          title="Total Likes"
          value={stats.totalLikes}
          icon={FaThumbsUp}
          iconBg="bg-blue-100"
          iconColor="text-blue-500"
        />

        <OverviewStatsCard
          title="Membership"
          value={stats.isPremium ? "Premium" : "Free"}
          icon={FaCrown}
          iconBg="bg-yellow-100"
          iconColor="text-yellow-500"
        />
      </div>

      {/* Optional Activity Section */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4">
        <h2 className="text-xl font-bold">Account Summary</h2>

        <p className="mt-1 text-gray-500">
          You have created{" "}
          <span className="font-semibold text-black">{stats.totalRecipes}</span>{" "}
          recipes and received{" "}
          <span className="font-semibold text-black">{stats.totalLikes}</span>{" "}
          likes from the community.
        </p>
      </div>
    </section>
  );
}
