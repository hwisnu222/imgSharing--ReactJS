import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navbar, Button, FormControl } from "react-bootstrap";

// pages
import Home from "./pages/Home";
import PhotosDetail from "./pages/PhotosDetail";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <header className="py-2 sticky-top bg-white">
            <Navbar className="justify-content-between">
              <div className="d-flex align-items-center">
                <h3>ImgSharing</h3>

                <Link to="/" className="ml-5">
                  <span className="font-weight-bold text-decoration-none text-dark">
                    Beranda
                  </span>
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
                <Button type="submit" variant="dark" className="shadow-none">
                  Login
                </Button>
              </div>
            </Navbar>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={PhotosDetail} />
          </Switch>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
