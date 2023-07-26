import React, { useContext, useState } from "react";

import { Avatar, Button, Icons, Title } from "web-client/components/atoms";
import { Table } from "web-client/components/molecules";
import { UserFormModal } from "web-client/components/templates";

import UsersContext from "../../context/users-context";
import { User } from "../../users.types";
import { PageHeader, UserActionsTableCell, UserTableCellMobile } from "./user-list.styles";

const UserList: React.FC = () => {
  const { isLoading, users, deleteUser } = useContext(UsersContext);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  return <>
    <UserFormModal
      data-testid="user-form-modal"
      user={selectedUser}
      isOpen={!!selectedUser}
      onClose={() => setSelectedUser(undefined)}
    />
    <PageHeader>
      <Title level={4}>Usuários</Title>
    </PageHeader>
    <Table
      data-testid="user-list-table"
      loading={isLoading}
      dataSource={users}
      columns={[
        {
          title: "Usuário",
          key: "sm_user",
          render: (user) => (
            <UserTableCellMobile>
              <Avatar src={user.avatar} />
              <>
                {user.name}
                <br/>
                {user.email}
              </>
            </UserTableCellMobile>
          ),
          responsive: ["xs"],
        },
        {
          title: '',
          dataIndex: 'avatar',
          key: 'avatar',
          render: avatar => <Avatar src={avatar} />,
          responsive: ["sm"],
        },
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
          width: "50%",
          responsive: ["sm"],
        },
        {
          title: 'Idade',
          dataIndex: 'age',
          key: 'age',
          responsive: ["sm"],
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          responsive: ["sm"],
        },
        {
          title: '',
          key: 'actions',
          render: (_, user) => <UserActionsTableCell>
            <Button
              icon={<Icons.EditFilled />}
              shape="circle"
              onClick={() => { setSelectedUser(user) }}
            />
            <Button danger
              icon={<Icons.DeleteFilled />}
              shape="circle"
              onClick={() => deleteUser(user.id)}
            />
          </UserActionsTableCell>,
        },
      ]}
    />
  </>
}

export default UserList;
