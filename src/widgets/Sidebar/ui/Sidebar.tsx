import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/house.svg";
import AboutIcon from "shared/assets/icons/stickies.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [t] = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        className={cls.collapseBtn}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.INVERTED} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("Main page")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.INVERTED} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("About us")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.themeswitcher} />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
