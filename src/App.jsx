import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/userStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Connection from "./components/Connection";
import Requests from "./components/Requests";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/requests" element={<Requests />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
