import React from "react";
import { Link } from "react-router-dom";

const roomsNavigationData = [
  {
    name: "Living Room",
    href: "/",
  },
  {
    name: "Workplace",
    href: "/workplace",
  },
  {
    name: "Bed Room",
    href: "/bed",
  },
  {
    name: "Kitchen",
    href: "/kitchen",
  },
];

function remainingRooms(room) {
  return roomsNavigationData.filter((eachRoom) => eachRoom.name !== room);
}

export const RoomsNavigation = ({ currentRoom }) => {
  return (
    <ul className="fixed bottom-0 m-2 md:mx-8 md:my-6 lg:mx-12 lg:my-8 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm text-white font-bold p-2 rounded-2xl w-[180px]">
      {remainingRooms(currentRoom).map((room,index) => (
        <Link key={index} to={room.href} className="hover:bg-glass dark:hover:bg-glass-dark transition flex items-center justify-between rounded-2xl">
          <li className="p-2 text-lg">
            {room.name}
          </li>
          <span className="p-2">&#10140;</span>
        </Link>
      ))}
    </ul>
  );
};
