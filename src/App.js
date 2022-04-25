import "./index.css";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./components/pages/AllMeetups";
import Favourites from "./components/pages/Favourites";
import NewMeetups from "./components/pages/NewMeetups";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetups />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/meet-up" element={<NewMeetups />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
