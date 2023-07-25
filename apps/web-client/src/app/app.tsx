import { ThemeContextProvider } from '../modules/theme';
import { UsersContextProvider, UsersPages } from '../modules/users';
import { Header } from '../components/organisms';
import StyledApp, { StyledAppPage } from './app.styles';

export function App() {
  return (
    <ThemeContextProvider>
      <UsersContextProvider>
        <StyledApp>
          <Header />
          <StyledAppPage>
            <UsersPages.UserList />
          </StyledAppPage>
        </StyledApp>
      </UsersContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
