import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes/public/public_routes";

function App() {
  //what all routes should look like
  type RouteProp = {
    path: string;
    element: React.ElementType;
    children?: RouteProp[];
  };
  return (
    <>
      

      <main className="pt-[64px]">
         <Routes>
           {/* loop through all main routes */}
        {PUBLIC_ROUTES.map((route: RouteProp, idx: number) => (
          <Route key={idx} path={route.path} element={<route.element />}>
             {/* if route has sub-pages, render them here */}
            {route.children &&
              route.children.map((child, childIdx) => (
                <Route
                  key={childIdx}
                  path={child.path}
                  element={<child.element />}
                />
              ))}
          </Route>
        ))}
      </Routes>
      </main>
    </>
  );
}

export default App;
