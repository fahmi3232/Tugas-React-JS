import React, { useEffect } from "react";

const About = ({n, a}) => {

    useEffect(() => {
        console.log('Oke Bos')
    })
  return (
    <div>
      <h2>Nama: {n}</h2>
      <h2>Alamat: {a}</h2>
    </div>
  );
};

export default About;
