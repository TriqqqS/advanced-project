import { Counter } from "../../../entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      <Counter />
      {t("Main page")}
    </div>
  );
};

export default MainPage;
