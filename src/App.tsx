import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
