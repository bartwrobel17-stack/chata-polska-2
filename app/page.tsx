import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

async function getPhotos() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    return (await list({ prefix: "gallery/" })).blobs.map((b) => ({ url: b.url, pathname: b.pathname }));
  } catch { return []; }
}

export default async function Home() {
  const photos = await getPhotos();
  return <main>
    <header className="topbar"><div className="container nav"><a className="brand" href="#start">CHATA <span>POLSKA</span></a><nav><a href="#o-sklepie">O sklepie</a><a href="#gazetka">Gazetka</a><a href="#sklep">Sklep</a><a href="#galeria">Galeria</a><a href="#kontakt">Kontakt</a></nav></div></header>

    <section id="start" className="hero"><div className="container heroGrid"><div>
      <p className="eyebrow">CHATA POLSKA • RAWICZ</p>
      <h1>Codzienne zakupy.<br/><span>Blisko Ciebie.</span></h1>
      <p className="lead">Chata Polska w Rawiczu to miejsce na codzienne zakupy spożywcze, świeże produkty i promocje. Sprawdź informacje o sklepie, aktualną gazetkę i zaplanuj dojazd.</p>
      <div className="actions"><a className="button" href="#gazetka">Sprawdź promocje</a><a className="textButton" href="#sklep">Znajdź sklep ↓</a></div>
    </div><div className="heroCard"><small>CHATA POLSKA</small><strong>Zakupy<br/>po polsku.</strong><span>Rawicz • Spokojna</span></div></div></section>

    <section id="o-sklepie" className="section"><div className="container featureGrid"><div>
      <p className="eyebrow">O SKLEPIE</p><h2>Twój sklep na codzienne zakupy.</h2>
      <p className="lead">Chata Polska to sieć sklepów spożywczych, w której znajdziesz produkty potrzebne na co dzień. Sklep w Rawiczu przy ulicy Spokojnej jest wygodnym miejscem na szybkie zakupy blisko domu.</p>
      <p className="lead">Na stronie znajdziesz najważniejsze informacje o lokalizacji, promocjach, kontakcie i galerii. Aktualne oferty i materiały marki są dostępne również na oficjalnej stronie Chaty Polskiej.</p>
    </div><div className="infoList">
      <div><b>01</b><span>Produkty spożywcze na co dzień</span></div><div><b>02</b><span>Promocje i aktualna gazetka</span></div><div><b>03</b><span>Sklep w Rawiczu</span></div><div><b>04</b><span>Galeria zdjęć sklepu</span></div>
    </div></div></section>

    <section id="gazetka" className="section light"><div className="container"><div className="sectionHead"><div><p className="eyebrow">GAZETKA PROMOCYJNA</p><h2>Promocje na teraz.</h2></div><a className="textButton" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a></div>
      <div className="promoGrid"><div className="promoCard"><span>AKTUALNA OFERTA</span><h3>Sprawdź bieżące promocje</h3><p>Gazetki promocyjne i aktualne materiały sieci znajdziesz na oficjalnej stronie Chaty Polskiej.</p><a className="button" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Otwórz gazetkę ↗</a></div><div className="promoSide"><strong>Planowanie zakupów</strong><p>Przed wizytą możesz sprawdzić aktualne promocje i przygotować listę zakupów.</p></div></div>
    </div></section>

    <section id="sklep" className="section"><div className="container storeGrid"><div>
      <p className="eyebrow">CHATA POLSKA RAWICZ</p><h2>Znajdź nas<br/>w Rawiczu.</h2>
      <p className="lead">Sklep znajduje się przy ulicy Spokojnej w Rawiczu. Kliknij przycisk, aby otworzyć lokalizację w Google Maps i rozpocząć nawigację.</p>
      <div className="addressCard"><span className="boxLabel">ADRES</span><strong>Spokojna</strong><span>63-900 Rawicz</span><span className="smallNote">Lokalizacja sklepu podana dla tej placówki.</span></div>
      <div className="actions"><a className="button" href="https://www.google.com/maps/search/?api=1&query=Chata%20Polska%20Spokojna%2C%2063-900%20Rawicz" target="_blank" rel="noreferrer">Nawiguj do sklepu ↗</a><a className="textButton" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a></div>
    </div><div id="kontakt" className="contactBox"><p className="boxLabel">INFORMACJE DLA KLIENTÓW</p><h3>Przed wizytą</h3><div className="contactRows"><p><strong>Adres</strong><br/>Spokojna, 63-900 Rawicz</p><p><strong>Godziny</strong><br/>Godziny warto sprawdzić bezpośrednio przed wizytą, ponieważ mogą się zmieniać.</p><p><strong>Telefon</strong><br/>Brak potwierdzonego numeru telefonu tej placówki.</p><p><strong>Oficjalna strona</strong><br/><a href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">chatapolska.pl ↗</a></p></div></div></div></section>

    <section id="galeria" className="section light"><div className="container"><div className="sectionHead"><div><p className="eyebrow">GALERIA</p><h2>Sklep i okolica.</h2><p className="lead">Zdjęcia możesz dodawać samodzielnie przez prywatny panel właściciela.</p></div><a className="button" href="/admin">Panel właściciela</a></div>
      {photos.length ? <div className="gallery">{photos.map((x) => <a key={x.pathname} href={x.url} target="_blank" rel="noreferrer"><img src={x.url} alt="Chata Polska Rawicz" loading="lazy"/></a>)}</div> : <div className="emptyGallery"><strong>Galeria czeka na zdjęcia.</strong><span>Wejdź do panelu właściciela, wybierz kilka zdjęć naraz i kliknij „Dodaj zdjęcia”.</span></div>}
    </div></section>

    <section className="section aboutBottom"><div className="container bottomGrid"><div><p className="eyebrow">INFORMACJE</p><h2>Wszystko w jednym miejscu.</h2></div><p className="lead">Ta strona została przygotowana jako lokalna wizytówka Chaty Polskiej w Rawiczu. Dla aktualnych ofert, informacji sieci i materiałów promocyjnych korzystaj również z oficjalnej strony marki.</p></div></section>

    <footer><div className="container footerInner"><div><b>CHATA POLSKA</b><span>Rawicz • Spokojna</span></div><div><a href="/admin">Panel właściciela</a><a href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a></div></div></footer>
  </main>;
}
