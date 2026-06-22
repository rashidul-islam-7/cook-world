import React from "react";

const OverviewStatsCard = ({ title, value, icon: Icon, iconBg, iconColor }) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ">
      <div className="flex items-center gap-3">
         <div
          className={`flex h-14 w-14 items-center justify-center rounded-sm ${iconBg}`}
        >
          <Icon className={`text-2xl ${iconColor}`} />
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">{value}</h3>
        </div>

       
      </div>
    </div>
  );
};

export default OverviewStatsCard;
