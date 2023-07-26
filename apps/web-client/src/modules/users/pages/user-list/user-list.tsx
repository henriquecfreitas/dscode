import React, { useContext, useState } from "react";

import { Avatar, Button, Icons, Title } from "web-client/components/atoms";
import { Table } from "web-client/components/molecules";
import { UserFormModal } from "web-client/components/templates";

import UsersContext from "../../context/users-context";
import { User } from "../../users.types";
import { PageHeader, UserActionsTableCell } from "./user-list.styles";

const UserList: React.FC = () => {
  const { isLoading, users, deleteUser } = useContext(UsersContext);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  return <>
    <UserFormModal
      user={selectedUser}
      isOpen={!!selectedUser}
      onClose={() => setSelectedUser(undefined)}
    />
    <PageHeader>
      <Title level={4}>Usuários</Title>
    </PageHeader>
    <Table
      loading={isLoading}
      dataSource={users}
      columns={[
        {
          title: '',
          dataIndex: 'avatar',
          key: 'avatar',
          render: avatar => <Avatar src={avatar} />,
        },
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
          width: "50%",
        },
        {
          title: 'Idade',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '',
          key: 'actions',
          render: (_, user) => <UserActionsTableCell>
            <Button
              icon={<Icons.EditFilled />}
              onClick={() => { setSelectedUser(user) }}
            >
              Editar
            </Button>
            <Button danger
              icon={<Icons.DeleteFilled />}
              onClick={() => deleteUser(user.id)}
            >
              Remover
            </Button>
          </UserActionsTableCell>,
        },
      ]}
    />
  </>
}

export default UserList;
