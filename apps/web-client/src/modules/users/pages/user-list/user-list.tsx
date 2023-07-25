import React, { useContext } from "react";

import { Avatar, Title } from "web-client/components/atoms";
import { Table } from "web-client/components/molecules";
import UsersContext from "../../context/users-context";
import { PageHeader } from "./user-list.styles";

const UserList: React.FC = () => {
  const { isLoading, users } = useContext(UsersContext);

  return <>
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
      ]}
    />
  </>
}

export default UserList;
