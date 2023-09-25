import React from "react";
import "./css/menu.css";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  return (
    <div className="section" id="menu">
      <h2>{t("menu")}</h2>

      <div id="menu-list">
        <span className="menu-heading">{t("bbq")}</span>
        <ul>
          <li>
            <span className="menu-item">{t("pork bbq (mixed piaces)")}</span>
            <b className="menu-price">3000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("pork chops bbq")}</span>
            <b className="menu-price">3300 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("pork ribs bbq")}</span>
            <b className="menu-price">3200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("pork belly bbq")}</span>
            <b className="menu-price">2800 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("pork ikibir bbq")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb bbq (mixed piaces)")}</span>
            <b className="menu-price">3700 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb chops bbq")}</span>
            <b className="menu-price">4200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb ribs bbq")}</span>
            <b className="menu-price">4200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb ikibir bbq")}</span>
            <b className="menu-price">1700 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("veal bbq")}</span>
            <b className="menu-price">1700 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("grilled vegetables")}</span>
            <b className="menu-price">1200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("grilled trout")}</span>
            <b className="menu-price">5000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("grilled sterlet fish")}</span>
            <b className="menu-price">7500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("grilled mushrooms")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("grilled chicken")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
        </ul>
        <span className="menu-heading">{t("hot dishes")}</span>
        <ul>
          <li>
            <span className="menu-item">{t("beef khashlama")}</span>
            <b className="menu-price">3500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb khashlama")}</span>
            <b className="menu-price">4500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("trout khashlama")}</span>
            <b className="menu-price">5000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("rabbit chakhobili")}</span>
            <b className="menu-price">4000 AMD</b>
          </li>
          <li>
            <span className="menu-item">
              {t("rabbit with margarine sauce")}
            </span>
            <b className="menu-price">8000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("veal ribs")}</span>
            <b className="menu-price">7500 AMD</b>
          </li>
          <li>
            <span className="menu-item">
              {t("trout stuffed with vegetables")}
            </span>
            <b className="menu-price">6000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("beef matcha")}</span>
            <b className="menu-price">4500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("tolma cabbage wrapping")}</span>
            <b className="menu-price">2200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("tolma leaf wrapping")}</span>
            <b className="menu-price">2200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("tava")}</span>
            <b className="menu-price">2500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("artsakh kurkut")}</span>
            <b className="menu-price">1700 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("kerusus")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("khurjin")}</span>
            <b className="menu-price">2500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("harrisa")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lamb shoulder")}</span>
            <b className="menu-price">6500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("jarkoye")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("jarkoye nairi")}</span>
            <b className="menu-price">2200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("kufta")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("fried kufta")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("fried chicks")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("nairi")}</span>
            <b className="menu-price">3000 AMD</b>
          </li>
        </ul>
        <span className="menu-heading">{t("appetizers")}</span>
        <ul>
          <li>
            <span className="menu-item">{t("meat mix")}</span>
            <b className="menu-price">2400 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("assorted cheese (local)")}</span>
            <b className="menu-price">2000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("assorted cheese (dutch)")}</span>
            <b className="menu-price">2200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("greens")}</span>
            <b className="menu-price">700 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("pickleds")}</span>
            <b className="menu-price">1400 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("olives")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("lemon")}</span>
            <b className="menu-price">400 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("tomato")}</span>
            <b className="menu-price">2000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("strained yogurt")}</span>
            <b className="menu-price">600 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("rejan")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
        </ul>
        <span className="menu-heading">{t("salads")}</span>
        <ul>
          <li>
            <span className="menu-item">{t("caesar salad")}</span>
            <b className="menu-price">3000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("capital salad")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("nairi salad")}</span>
            <b className="menu-price">2200 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("chicken salad")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("bulgarian salad")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("tabulé")}</span>
            <b className="menu-price">800 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("greek salad")}</span>
            <b className="menu-price">2000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("chicken & mushroom salad")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("korean salad")}</span>
            <b className="menu-price">800 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("beetroot salad")}</span>
            <b className="menu-price">800 AMD</b>
          </li>
        </ul>
        <span className="menu-heading">{t("soups")}</span>
        <ul>
          <li>
            <span className="menu-item">{t("spas")}</span>
            <b className="menu-price">800 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("chicken soup")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("mushroom soup")}</span>
            <b className="menu-price">1000 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("khash")}</span>
            <b className="menu-price">2500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("piti")}</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item">{t("borsch")}</span>
            <b className="menu-price">1200 AMD</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
