import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const MainPage = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t("Main page")}
      <Input value={value} onChange={onChange} placeholder="Enter text" />
    </div>
  );
};

export default MainPage;
