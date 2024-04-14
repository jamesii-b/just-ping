import React from "react";

function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg mb-8">
          We are currently undergoing maintenance. Please check back soon.
        </p>
        <p className="text-lg">Estimated Time Remaining: N/A</p>
      </div>
    </div>
  );
}

export default MaintenancePage;
