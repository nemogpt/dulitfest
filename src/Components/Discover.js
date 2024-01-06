import React from 'react';
import DiscoverCard from './DiscoverCard';
import "./Discover.css"

const Discover = () => {
  return (
    <div className="discover">
    <h1>Explore the festival</h1>
      <DiscoverCard dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" title="Speakers"/>
      <DiscoverCard dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" title=" Programme"/>
      <DiscoverCard dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" title="Sponsors & Partners"/>
      <DiscoverCard dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" title="Contact Us"/>
      </div>
  );
};

export default Discover;
