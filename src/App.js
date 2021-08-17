import "./App.css";
import BottomSection from "./components/BottomSection";
import Header from "./components/Header";
import ProductFeed from "./ProductFeed";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductFeed />
      <BottomSection />
    </div>
  );
};

export default App;
