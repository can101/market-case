import { useTranslation } from "react-i18next";

export default function (title?: string): void {
    const { t } = useTranslation();
    let newTitle: string;
    newTitle = (title) ? "Mgreen Market | " + t(title) : "Mgreen Market";
    document.title = newTitle;
}