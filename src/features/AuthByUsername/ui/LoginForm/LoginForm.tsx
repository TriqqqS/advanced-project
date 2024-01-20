import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { AppDispatch } from "app/providers/StoreProvider/ui/StoreProvider";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginform, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t("Enter username")}
        type="text"
        autofocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t("Enter password")}
        type="text"
        onChange={onChangePassword}
        value={password}
      />
      <Button theme={ButtonTheme.OUTLINE} className="loginBtn" onClick={onLoginClick}>
        {" "}
        {t("Sign In")}
      </Button>
    </div>
  );
});
