import { RouterProvider } from 'react-router-dom';
import { useTheme } from './contex/ThemeModeContext';
import routes from './routes';
import './styles/mixin.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
