import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Spikeball from "./spikeball";

function App() {
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/"         element={<Navigate to="/Roundnet"/>}/>
            <Route path="/Roundnet/*"   element={<Spikeball/>}/>
          </Routes>
        </div>
      </HashRouter>
  );
}
export default App;