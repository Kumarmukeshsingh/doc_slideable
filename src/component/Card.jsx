import { data } from "autoprefixer";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className=" relative w-60  py-10 px-8 bg-zinc-900/50 h-72 rounded-[40px] text-white overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.decs}</p>
      <div className="footer  absolute bottom-0   w-full left-0   ">
        <div className=" flex items-center justify-between mb-5 py-3 px-8   ">
          <h5>{data.fileSize} </h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size=".8em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full h-10 py-4 ${
              data.tag.tagColor === "blue" ? " bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className=" text-sm font-semibold">{data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
