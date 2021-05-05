import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar, Button, FormControl } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// pages
import Home from "./pages/Home";
import PhotosDetail from "./pages/PhotosDetail";
import Favorites from "./pages/Favorites";

// context
import { FavoriteContextProvider } from "./context/userContext";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <FavoriteContextProvider>
          <BrowserRouter>
            <header className="py-2 sticky-top bg-white">
              <Navbar className="justify-content-between">
                <div className="d-flex align-items-center">
                  <h3>ImgSharing</h3>
                  <Link to="/" className="ml-5 text-decoration-none">
                    <span className="font-weight-bold text-dark">Beranda</span>
                  </Link>
                </div>
                <div>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 search shadow-none"
                  />
                </div>
                <div inline>
                  <Link to="/favorite">
                    <Button
                      type="submit"
                      variant="dark"
                      className="shadow-none button-danger-lg"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </div>
              </Navbar>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/photos" component={PhotosDetail} />
              <Route exact path="/favorite" component={Favorites} />
            </Switch>
          </BrowserRouter>
        </FavoriteContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
