import { CustomSidebar } from "./components/custom-components/sidebar/component";
import RouteIndex from "./routes/route-index";
import "./css/scroll-container.css";

function App() {
  return (
    <div className="w-screen h-screen">
      <CustomSidebar>
        <div className="w-full h-full scroll-container">
          <RouteIndex />
        </div>
      </CustomSidebar>
    </div>
  );
}

export default App;
