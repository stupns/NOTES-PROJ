import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesPage from './pages/NotesPage';

const routerPage = createBrowserRouter([
  {
    path: "/",
    element: <NotesPage />,
    exact: false,
  },
  {
    path: "/note/:id",
    element: <NotePage />,
  }
]);

function App() {
  return (
    <div className="container dark">
      <div className='app'>
        <Header />
        <RouterProvider router={routerPage} />
      </div>

    </div>
  );
}

export default App;
