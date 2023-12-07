import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// ErrorBoundary testing component
export const ErrorButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>{t("Throw error")}</Button>;
};
