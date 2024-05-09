import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime maiores rem perferendis",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
    {
      decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime maiores rem perferendis",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime maiores rem perferendis",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
    {
      decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime maiores rem perferendis",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
    {
      decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime maiores rem perferendis",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className=" fixed z-[3] w-full h-full top-0 left-0 bg-sky-800/50 flex gap-5 flex-wrap  "
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
