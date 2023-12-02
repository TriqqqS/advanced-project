import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED} className={cls.mainLink}>
          Main Page
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          About Page
        </AppLink>
      </div>
    </div>
  );
};