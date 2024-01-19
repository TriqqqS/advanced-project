import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginform, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t("Enter username")}
        type="text"
        autofocus={true}
      />
      <Input className={cls.input} placeholder={t("Enter password")} type="text" />
      <Button className="loginBtn"> {t("Sign In")}</Button>
    </div>
  );
};
