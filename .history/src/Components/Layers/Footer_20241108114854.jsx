export const Footer = () => {
  return (
    <>
      <section className="footerContainer">
        <div className="footerContents">
          <div className="footerTextContainer">
            <div className="parapList">
              <h4>Parap</h4>
              <ul>
                <li>Hakkımızda</li>
                <li>Kültür</li>
                <li>Kariyer</li>
                <li>Blog</li>
                <li>TL Yükleme İşlemi</li>
              </ul>
            </div>
            <div>
              <div className="destekListContainer">
                <div className="destekList">
                  <h4>Destek</h4>
                  <div className="destekListCover">
                    <ul className="initialDestekList">
                      <li>Bize Ulaşın</li>
                      <li>Yardım</li>
                      <li>Sözlük</li>
                      <li>İptal / İade İşlemleri</li>
                      <li>Ücretler ve Limitler</li>
                    </ul>

                    {/* <div > */}
                    <ul className="otherDestek">
                      <li>Temsilcilikler</li>
                      <li>S.S.S.</li>
                      <li>Kart Durum Sorgulama</li>
                      <li>Harcama İtirazı</li>
                      <li>Basın Medya Kiti</li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="userContact">
            <div className="addressContainer">
              <p className="email">destek@parapp.com.tr</p>
              <p className="number">0850 988 88 88</p>
            </div>
            <div className="socialMedia">
              <img src="/Youtube.png" alt="Youtube" />
              <img src="/Facebook.png" alt="Facebook" />
              <img src="/İnstagram.png" alt="İnstagram" />
              <img src="/Linkedin.png" alt="Linkedin" />
              <img src="/Twitter.png" alt="Twitter" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
