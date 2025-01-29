import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  console.log(data);

  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/Harsh-patel29`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         setdata(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github name:{data.name}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/Harsh-patel29`);
  return response.json();
};
