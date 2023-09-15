import react from "react";
import { useTranslation } from "../../i18n/config";

const I18n = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>多语言测试用例</div>
      <div>{t("title", { name: "John" })}</div>
    </>
  );
};

export default I18n;
