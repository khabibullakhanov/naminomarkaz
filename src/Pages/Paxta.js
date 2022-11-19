import React from "react";
import "../Assets/CSS/paxta.css";
import toshT from "../Assets/Images/CottonImages/kopChontakli-2.png";
import toshTt from "../Assets/Images/CottonImages/kopChontakli.png";
import toshTtt from "../Assets/Images/CottonImages/kopChontakli-3.png";

export function Paxta() {
  return (
    <div id="paxta">
      <div id="paxta-container">
        <div id="paxta-tittle">
          <h3>PАXTА XOM-АSHYOSI UCHUN KO'P ChO'NTАKLI MАGNITLI TOSHTUTGICH</h3>
        </div>
        <div id="paxta-data">
          <div id="paxta-data-left">
            <span>
              Ko'p cho'ntakli toshtutgich paxtaning tarkibidagi og'ir jismlarni
              (tosh, kesak, metall parchalari va boshqalar) ajratadi. Uning
              cho'ntaklari soni ko'pligi og'ir aralashmalarni to'la ajratib
              olish imkonini beradi. Bundan tashqari unga magnit val o'rnatilgan
              bo'lib, paxtaning tarkibidagi metal parchalarini ushlab qolish
              imkoniyatini yaratadi.
            </span>
            <div id="paxta-data-leftt">
              <span>
                Paxta xom ashyosini qayta ishlash vaqtida uni havo transporti
                yordamida tashishda og'ir jismlarni tutib qolish samaradorligi
                98 %. Ishlab chiqarish unumdorligi – 15t∕s;
              </span>
            </div>
            <div id="paxta-data-leftt">
              <span>
                Paxta tozalash mashinalarining ishchi qismlarini, jin va linter
                mashinalarini arralari shikastlanishini kamayishi hisobiga
                iqtisodiy samaradorlik 50 mln. soʼmni tashkil qiladi. Xozirda
                ushbu qurilma «Kosonsoy paxta tolasi» va «Chinobod paxta tolasi»
                aktsiyadolik jamiyatlarida ishlab chiqarish tizimiga joriy
                etilgan. <br />
                <b>Mualliflik guvohnoma raqami: 1390257</b>
              </span>
              <div id="paxta-qismlari">
                <img src={toshT} alt="" />
                <div id="paxta-qism-raqam">
                  <span>1-kirish quvuri</span>
                  <span>2-ajratish kamerasi</span>
                  <span>3-pog'anali qilib o'rnatilgan cho'ntaklar</span>
                  <span>4-moslama</span>
                  <span>5-og'ir aralashmalar va tosh to'plagich</span>
                  <span>6-magnit moslama</span>
                  <span>7-chiqishi quvuri</span>
                </div>
              </div>
            </div>
          </div>
          <div id="paxta-data-right">
            <img src={toshTt} alt="" />
            <img src={toshTtt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
