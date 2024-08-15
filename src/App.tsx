import { NotFound, Waitlist } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Waitlist />} />
      <Route index path="*" element={<NotFound />} />
    </Routes>
  );
}
