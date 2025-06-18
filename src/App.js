import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

import Section from "../src/Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Use Section and pass the required props */}
      <Section
        title="Top Albums"
        endpoint="https://qtify-backend-labs.crio.do/albums/top"
      />
      {/* You can also render New Albums like this */}
      {/* <Section title="New Albums" endpoint="https://qtify-backend-labs.crio.do/albums/new" /> */}
    </div>
  );
}

export default App;
