import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";

const products = [
  { id: "negro1", name: "Termo Negro 1", image: "/assets/negro1.jpg", description: "Termo color negro", price: 45 },
  { id: "negro2", name: "Termo Negro 2", image: "/assets/negro2.webp", description: "Termo color negro", price: 50 },
  { id: "negro3", name: "Termo Negro 3", image: "/assets/negro3.png", description: "Termo color negro", price: 55 },
  { id: "blanco1", name: "Termo Blanco 1", image: "/assets/blanco1.jpg", description: "Termo color blanco", price: 45 },
  { id: "blanco2", name: "Termo Blanco 2", image: "/assets/blanco2.jpg", description: "Termo color blanco", price: 50 },
  { id: "blanco3", name: "Termo Blanco 3", image: "/assets/blanco3.webp", description: "Termo color blanco", price: 55 },
  { id: "verde1", name: "Termo Verde 1", image: "/assets/verde1.jpg", description: "Termo color verde", price: 45 },
  { id: "verde2", name: "Termo Verde 2", image: "/assets/verde2.jpg", description: "Termo color verde", price: 50 },
  { id: "verde3", name: "Termo Verde 3", image: "/assets/verde3.webp", description: "Termo color verde", price: 55 },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer products={products} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
