import { ThemeContextProvider } from '../modules/theme';
import { UsersPages } from '../modules/users';
import { Header } from '../components/organisms';
import StyledApp from './app.styles';

export function App() {
  return (
    <ThemeContextProvider>
      <StyledApp>
        <Header />
        <UsersPages.UserList />
      </StyledApp>
    </ThemeContextProvider>
  );
}

export default App;
