import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t("Sign In")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit? Voluptatum
        quibusdam corrupti quisquam eum eveniet iure nemo. Sint quae dolorem odio at? Culpa
        commodi magnam impedit ipsum, ratione odit.
      </Modal>
    </div>
  );
};
