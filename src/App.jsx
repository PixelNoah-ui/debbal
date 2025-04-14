import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Applayout from "./layout/Applayout";
import { lazy, Suspense } from "react";
import PageNotFound from "./page/PageNotFound";
import Fullspinner from "./ui/Fullspinner";

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Service = lazy(() => import("./page/Service"));
const Porfolio = lazy(() => import("./page/Porfolio"));
const Contact = lazy(() => import("./page/Contact"));

function App() {
  return (
    <Suspense fallback={<Fullspinner />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Porfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="8" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </Suspense>
  );
}

export default App;
