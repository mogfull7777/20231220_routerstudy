import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Title from "./components/Title";
import Detail from "./components/Detail";
import UseError from "./components/UseError";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />
      {/* <Outlet /> 은 각 route들에 매칭 시켜놓은 element들이 렌더링 되어 나타난다. */}
    </>
  );
};

function App() {
  return (
    <>
      <h2>리액트 라우팅 연습.</h2>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/title" element={<Title />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/*" element={<UseError />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
