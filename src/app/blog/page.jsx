"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getData() {
      let res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-newest"
      );
      let json = await res.json();

      setData(json);
    })();
  }, []); 

  //Hello

  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          return (
            <Link href={`/single-blog/${item["id"]}`} key={index}>
              <div className="card w-100 glass">
                <figure>
                  <img src={item["img"]} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item["title"]}</h2>
                  <p>{item["short"]}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;