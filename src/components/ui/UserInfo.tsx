import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
const UserInfo = () => {
  return (
    <section className="card-container">
      <div className="flex justify-between">
        <h1 className="font-sans font-medium">User Infomation </h1>
        <Link href="/" color="primary" size="sm">
          See all
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-serif font-semibold text-lg text-gray-700">
          Chris Even
        </h1>
        <span className="text-sm ">@chriseven</span>
      </div>
      {/* User bio */}
      <div>
        <p className="text-sm line-clamp-3 font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* User status */}
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-2 items-center">
          <FaLocationDot className="text-gray-400" />
          <p className="text-sm">
            Living in{" "}
            <span className="text-gray-600 font-semibold">Myanmar</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <RiGraduationCapFill className="text-gray-400" />
          <p className="text-sm">
            Went to
            <span className="text-gray-600 font-semibold">
              Yandanbon Universty
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineWork className="text-gray-400" />
          <p className="text-sm">
            Work at{" "}
            <span className="text-gray-600 font-semibold">AnyTech.Org</span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Link href="/" size="sm">
            <FaLink />
            <span>chirs.dev</span>
          </Link>
          <div className="flex items-center text-gray-400 ">
            <FaCalendarAlt className="w-6" />
            <span className="text-sm">Joined December 2023</span>
          </div>
        </div>
      </div>
      <Button color="primary">Following</Button>
      <Link href="/" color="danger" className="justify-end" size="sm">
        Block users
      </Link>
    </section>
  );
};

export default UserInfo;
