import React, { useContext, useEffect } from "react";

import { Form, Modal } from "web-client/components/molecules";
import { FormItem, Input, Title } from "web-client/components/atoms";
import { User, UsersContext } from "web-client/modules/users";

type UserFormModalProps = {
  user?: User,
  isOpen: boolean,
  onClose: () => void,
}

const UserFormModal: React.FC<UserFormModalProps> = ({
  user,
  isOpen,
  onClose,
}) => {
  const { updateUser } = useContext(UsersContext);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

  const submitForm = async () => {
    if (!user) return;
    const values = form.getFieldsValue();
    await updateUser(user?.id, values);
    onClose();
  };

  return (
    <Modal open={isOpen} onOk={submitForm} onCancel={onClose}>
      <Form form={form} >
        <Title level={4}>Editar Usuário</Title>
        <FormItem label="Nome" name="name"><Input /></FormItem>
        <FormItem label="Email" name="email"><Input /></FormItem>
        <FormItem label="Data de Nascimento" name="birthdate"><Input type="date" /></FormItem>
        <FormItem label="Avatar" name="avatar"><Input /></FormItem>
      </Form>
    </Modal>
  )
}

export default UserFormModal;
