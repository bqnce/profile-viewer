import React, { useEffect } from "react";

const Profile = ({ userData }) => {
  return (
    <div>
      {userData && userData.name ? (
        <div className="max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <div className="w-full h-32 bg-gray-800" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-500 to-transparent p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={userData.avatar_url}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
                <div>
                  <h2 className="text-white text-xl font-semibold">
                    {userData.name}
                  </h2>
                  <p className="text-gray-300">
                    Followers: {userData.followers}
                  </p>
                  <p className="text-gray-200 text-sm">
                    Following: {userData.following}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700">
              Account created on:{" "}
              {new Date(userData.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
