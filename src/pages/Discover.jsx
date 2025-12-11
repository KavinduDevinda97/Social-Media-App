import React, { useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Search } from "lucide-react";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Discover = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(dummyConnectionsData);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setUsers([]);
      setLoading(true);
      setTimeout(() => {
        setUsers(dummyConnectionsData);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div className="min-h-screen bg--gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Discover</h1>
          <p className="text-slate-600">
            Find and connect with new people in your network.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 shadow-md rounded-md border border-slate-200/60 bg-white/80">
          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                className="pl-10  sm:pl-12 w-full border border-gray-300 hover:border-gray-500  rounded-md max-sm:text-sm focus:outline-none focus:border-blue-500 "
                placeholder="Search..."
                onKeyUp={handleSearch}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="flex flex-wrap gap-6">
          {users.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>

        {loading && <Loading height="60vh" />}
      </div>
    </div>
  );
};

export default Discover;
