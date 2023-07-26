import { render } from '@testing-library/react';

import UserList from './user-list';

describe('UserList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserList />);
    expect(baseElement).toBeTruthy();
  });

  it('should have "Usuários" as the page header title', () => {
    const { getByText } = render(<UserList />);
    expect(getByText(/Usuários/gi)).toBeTruthy();
  });

  it('should render users list table', () => {
    const { getByTestId } = render(<UserList />);
    expect(getByTestId("user-list-table")).toBeTruthy();
  });

  it('should not render user form modal yet', () => {
    const { getByTestId } = render(<UserList />);
    expect(getByTestId("user-list-table")).toBeTruthy();
  });
});
