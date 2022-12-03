
import React from "react";
import Layout from "./components/layout/Layout.js";
import Routes from "./routes";
import "./assets/css/App.scss";
import "./assets/css/font.css";

function App() {
  return (
    <div className="App">
        <Layout>
          <Routes/>
        </Layout>
    </div>
  );
}

export default App;
