"use client";

import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const id = params.slug;

  const [data, setdata] = useState([]);

  useEffect(() => {
    (async function getdata() {
      let res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
      );
      let json = await res.json();

      setdata(json?.postDetails);
    })();
  }, [id]);
  console.log(data);

  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
        {data === null ? (
          <>
            {/* component */}
            {/* This is an example component */}
            <div className="flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br">
              <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                        404
                      </h1>
                      <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                        No Data in This 'ID' Of 'API'
                      </p>
                      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        We are already working to solve the problem.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="card w-100 glass">
            <figure>
              <img src={data?.img} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{data?.title}</h2>
              <p>{data?.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
