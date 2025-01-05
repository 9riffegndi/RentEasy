import React, { useState, useEffect } from "react";
import ShortenName from "../Utils/ShortName";


export default function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("dataRegisterUsers"));
    if (storedUser) {
      setUser(storedUser);
      setNewName(storedUser.name);
      setNewEmail(storedUser.email);
      setNewPassword(storedUser.password);
    }
  }, []);

  const handleEditProfile = () => {
    const updatedUser = {
      name: newName,
      email: newEmail,
      password: newPassword,
    };
    localStorage.setItem("dataRegisterUsers", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("dataRegisterUsers");
    window.location.reload();
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div className="flex flex-col items-center justify-center h-screen  p-6">
          <div className="p-8 w-full max-w-lg">
            <h1 className="text-2xl font-semibold text-center">Profile</h1>
            <div className="flex gap-2 items-center" >
              <button className="flex items-center btn btn-circle">{ShortenName(user.name)}</button>
              <p className=" font-extrabold text-3xl  mb-2">{user.name}</p>
            </div>
            {!isEditing ? (
              <div className="flex flex-col mt-5 gap-2 w-full">
                <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
                
                <div className="flex flex-col gap-2 justify-center ">
                  <button
                    className="btn btn-primary px-6 py-2 rounded-lg text-white"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                  <button
                    className="btn btn-error px-6 py-2 rounded-lg text-white"
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="input input-bordered w-full mt-2 px-4 py-2 rounded-lg border-gray-300"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="input input-bordered w-full mt-2 px-4 py-2 rounded-lg border-gray-300"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input input-bordered w-full mt-2 px-4 py-2 rounded-lg border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2 justify-center ">
                  <button
                    className="btn btn-success px-6 py-2 rounded-lg text-white"
                    onClick={handleEditProfile}
                  >
                    Save Changes
                  </button>
                  <button
                    className="btn btn-error px-6 py-2 rounded-lg text-white"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <p className="text-lg text-gray-600">Please log in to access your profile.</p>
        </div>
      )}
    </>
  );
}
