import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(cls.loginmodal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm />
    </Modal>
  );
};
