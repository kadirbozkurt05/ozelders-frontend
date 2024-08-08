import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <Container>
      <div className="p-8 text-gray-800">
        <div className="flex md:h-24 h-10 space-x-4 text-sm">
          <Separator orientation="vertical" className=" bg-red-500 md:w-1" />
          <div className="flex flex-row h-full justify-end">
            <p className="flex flex-row items-center md:text-3xl">Özel Ders Zamani Kullanım Koşulları</p>
          </div>
        </div>
        <br />
        <br />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Genel Kurallar</h2>
          <p className="mb-4">
            <strong>ozelderszamani.com</strong> platformuna üye olan tüm
            kullanıcılar, aşağıdaki kuralları kabul etmiş sayılırlar.
            Kullanıcıların bu kurallara uymaması durumunda, diğer kullanıcılar
            tarafından yapılacak şikayetler veya{" "}
            <strong>ozelderszamani.com </strong>
            tarafından yapılan tespitler doğrultusunda, ilgili kullanıcıların
            hesapları ve mesajları incelemeye alınabilir. Bu incelemeler
            sonucunda, kuralları ihlal ettiği tespit edilen kullanıcıların
            hesapları askıya alınabilir veya tamamen kapatılabilir. Gerekli
            görülen hallerde, bu bilgiler yasal mercilerle paylaşılabilir.
            Kullanıcıların, bu kurallara uymaması nedeniyle kendilerine ya da
            başkalarına gelebilecek zararlardan{" "}
            <strong>ozelderszamani.com</strong> sorumlu değildir; sorumluluk
            tamamen kullanıcıya aittir.
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                Kullanıcılar, platformda yayınladıkları içeriklerde hakaret,
                küçük düşürücü, müstehcen, pornografik, kötü niyetli, saldırgan
                ve üçüncü şahısların haklarını ihlal edici ifadeler
                kullanmayacaklarını kabul ederler.
              </strong>
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, suç teşkil edecek, yasal takip gerektirecek,
                yerel, ulusal veya uluslararası yasalarla çelişecek, veya diğer
                kullanıcıları rahatsız edecek içerikleri paylaşmayacaklarını
                taahhüt ederler.
              </strong>{" "}
              Bu tür içeriklerin paylaşılması durumunda, platform gerekli
              gördüğü takdirde yasal işlem başlatabilir.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, diğer kullanıcılarla yaptıkları özel
                mesajlaşmalarda alaycı, hakaret içeren, kötü niyetli, küçük
                düşürücü, pornografik içerikler göndermemeyi kabul ederler.
              </strong>
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, profil oluştururken verdikleri bilgilerin
                doğruluğunu kabul ederler.
              </strong>{" "}
              Yanlış bilgi tespit edilmesi durumunda, ozelderszamani.com ilgili
              kullanıcı hakkında gerekli işlemleri yapma hakkına sahiptir.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, profil bilgileri gibi genel bilgilerin diğer
                kullanıcılar tarafından görüntülenebileceğini kabul ederler.
              </strong>
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, başkalarının telif haklarını ihlal eden veya
                izinsiz kullanılan herhangi bir bilgi, yazılım veya malzemeyi
                yayımlayamazlar.
              </strong>
              Telif hakkı ihlali tespit edilmesi durumunda, mağdur kişi
              ozelderszamani.com ile iletişime geçmelidir.
            </li>
            <li className="mb-2">
              <strong>
                Özel ders veren öğretmenlerin profillerinde yer alan bilgilerin
                doğruluğunu teyit etmek, kullanıcıların sorumluluğundadır.
              </strong>
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com kullanıcılarına SPAM mesaj gönderimi
                kesinlikle yasaktır.
              </strong>{" "}
              Platformun amacı dışında kullanılması, kullanıcıların rahatsız
              edilmesi veya istenmeyen mesajlar gönderilmesi yasaktır. Bu tür
              eylemlerin tespit edilmesi durumunda, ilgili kullanıcı hakkında
              yasal işlem yapılabilir.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, en az 18 yaşında olduklarını teyit ederler.
              </strong>{" "}
              18 yaşın altındaki kullanıcılar, ebeveyn veya veli gözetiminde
              platforma üye olabilirler.
            </li>
            <li className="mb-2">
              <strong>
                Platform bireysel kullanıcılar içindir; şirketler, işletmeler
                veya örgütler, platformu ticari amaçlar için kullanamazlar.
              </strong>
              Platformdaki bilgiler, fotoğraflar, videolar ve linkler izinsiz
              kopyalanamaz veya başka bir ürün ya da hizmette kullanılamaz.
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Hizmetlerin Niteliği ve Sorumluluklar
          </h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                ozelderszamani.com, Hizmet Veren (özel ders veren) profillerini
                üyelerin kendi beyanları doğrultusunda yayınlayan ve Hizmet Alan
                (ders talep eden) kullanıcıların taleplerini üyelere ileten bir
                ilan platformudur.
              </strong>
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com sadece bir platformdur; platformda sunulan
                hizmetlerin sahibi veya sağlayıcısı değildir.
              </strong>{" "}
              Elektronik Ticarette Hizmet Sağlayıcı ve Aracı Hizmet Sağlayıcılar
              Hakkında Yönetmelik’in 6/4 maddesine göre, ozelderszamani.com
              aracı hizmet sağlayıcıdır ve kullanıcılar tarafından sağlanan
              içeriği kontrol etmek veya bu içerikle ilgili hukuka aykırı bir
              faaliyetin olup olmadığını araştırmakla yükümlü değildir.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, sitede profil oluşturan üyelerin MEB
                tarafından tanımlanan “öğretmen” tanımına uygunluğunu kontrol
                etmekle yükümlü değildir.
              </strong>{" "}
              Üyelerin kendilerini öğretmen olarak tanımlamaları tamamen kendi
              sorumluluklarındadır.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, özel ders hizmeti almak isteyenlerle ders
                vermek isteyenleri bir araya getiren bir yazılım şirketidir ve
                5580 sayılı Özel Öğretim Kurumları Kanunu kapsamına giren bir
                eğitim kurumu değildir.
              </strong>{" "}
              Dolayısıyla, platformda sunulan dersler ve eğitim hizmetleri
              ozelderszamani.com tarafından verilmemekte, bu hizmetler tamamen
              kullanıcılar tarafından sağlanmaktadır.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcılar arasında doğabilecek
                anlaşmazlıklardan veya verilen hizmetlerden kaynaklanabilecek
                zararlardan sorumlu tutulamaz.
              </strong>{" "}
              Platform, sadece hizmet verenlerle hizmet almak isteyenleri bir
              araya getiren bir aracıdır ve taraflar arasındaki ilişkiye müdahil
              olmaz.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, ozelderszamani.com üzerinde gerçekleştirdikleri
                her türlü işlem ve eylemden doğrudan sorumludur.
              </strong>{" "}
              Hizmet alan ve hizmet veren arasındaki ödemeler, anlaşmalar,
              hizmet kalitesi gibi konularda doğacak her türlü anlaşmazlık
              kullanıcıların kendi sorumluluğundadır.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların oluşturduğu içerikleri
                platformda yayınlama, düzenleme, yayından kaldırma veya reddetme
                hakkını saklı tutar.
              </strong>{" "}
              Bu içerikler arasında, kullanıcıların profillerinde yer alan
              bilgiler, ders talepleri, geri bildirimler, yorumlar ve diğer tüm
              kullanıcı tarafından oluşturulan materyaller yer alır.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların verdiği bilgilerin
                doğruluğunu teyit etmek amacıyla çeşitli araçlar ve yöntemler
                kullanabilir.
              </strong>
              Ancak, bu doğrulama süreçlerinin mutlak doğruluk garantisi
              sağlamadığı kullanıcılar tarafından kabul edilmiştir.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların e-posta adreslerini ve diğer
                iletişim bilgilerini doğrulamak amacıyla gerekli gördüğü teknik
                araçları kullanabilir.
              </strong>{" "}
              Bu doğrulama işlemi, kullanıcıların hesap güvenliği ve platformun
              sağlıklı işleyişi açısından önemlidir.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, platform üzerinde sunulan hizmetlerin
                doğruluğu, kalitesi, güvenilirliği ve yasallığı konusunda
                herhangi bir taahhütte bulunmaz.
              </strong>{" "}
              Kullanıcılar, platformu kullanarak sunulan hizmetlerden tamamen
              kendi sorumlulukları altında faydalanır.
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gizlilik ve Güvenlik</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların kişisel bilgilerini gizli
                tutar ve üçüncü şahıslarla paylaşmaz.
              </strong>{" "}
              Ancak, yasal zorunluluk hallerinde bu bilgiler ilgili mercilerle
              paylaşılabilir.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, hesaplarına ait kullanıcı adı ve şifre bilgilerini
                gizli tutmakla yükümlüdürler.
              </strong>{" "}
              Bu bilgilerin üçüncü kişilerle paylaşılması veya bu bilgilerin
              üçüncü kişilerce ele geçirilmesi durumunda, ozelderszamani.com
              sorumluluk kabul etmez.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların kişisel bilgilerinin
                güvenliğini sağlamak amacıyla çeşitli güvenlik önlemleri
                kullanır.
              </strong>
              Ancak, internet üzerinden iletilen verilerin güvenliğini tam
              olarak garanti edememektedir.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların hesaplarının güvenliği için
                düzenli olarak güvenlik kontrolleri yapar ve gerekli gördüğü
                durumlarda kullanıcıları bilgilendirir.
              </strong>
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">İçerik Kullanımı</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                Kullanıcılar, platformda paylaştıkları içeriklerin tüm
                sorumluluğunu kabul ederler.
              </strong>{" "}
              Bu içeriklerin yasalara uygun olması tamamen kullanıcıların
              sorumluluğundadır.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların paylaştığı içeriklerin
                doğruluğunu kontrol etmekle yükümlü değildir.
              </strong>{" "}
              İçeriklerin doğruluğu ve güvenilirliği tamamen kullanıcıların
              sorumluluğundadır.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, platformda paylaştıkları içerikleri diledikleri
                zaman kaldırma hakkına sahiptirler.
              </strong>{" "}
              Ancak, bu içeriklerin üçüncü kişiler tarafından kopyalanması veya
              paylaşılması durumunda, ozelderszamani.com sorumluluk kabul etmez.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların paylaştığı içeriklerin
                platformda kalıcı olarak yer almasını garanti etmez.
              </strong>{" "}
              Platformda yer alan içerikler, ozelderszamani.com'un takdirine
              bağlı olarak düzenlenebilir veya kaldırılabilir.
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Fikri Mülkiyet Hakları
          </h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                ozelderszamani.com, platformda yer alan tüm içeriklerin ve
                materyallerin telif hakkına sahiptir.
              </strong>{" "}
              Bu içerikler ve materyaller, ozelderszamani.com'un yazılı izni
              olmadan kopyalanamaz, dağıtılamaz veya başka bir şekilde
              kullanılamaz.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, platformda paylaştıkları içeriklerin kendi telif
                haklarına sahip olduklarını veya bu içerikleri paylaşma hakkına
                sahip olduklarını kabul ederler.
              </strong>{" "}
              Telif hakkı ihlali durumunda, kullanıcılar yasal olarak sorumlu
              tutulabilirler.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanıcıların paylaştığı içeriklerin telif
                hakkı ihlali durumunda gerekli yasal işlemleri başlatma hakkına
                sahiptir.
              </strong>{" "}
              Kullanıcılar, bu tür ihlallerden doğacak her türlü zararı
              karşılamakla yükümlüdürler.
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Kullanım Koşullarının Değiştirilmesi
          </h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                ozelderszamani.com, bu kullanım koşullarını dilediği zaman
                değiştirme hakkına sahiptir.
              </strong>{" "}
              Değişiklikler, platformda yayınlandığı tarihten itibaren geçerli
              olur.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, değişikliklerden haberdar olmak için kullanım
                koşullarını düzenli olarak kontrol etmekle yükümlüdürler.
              </strong>
              Kullanım koşullarındaki değişikliklerden sonra platformu
              kullanmaya devam eden kullanıcılar, bu değişiklikleri kabul etmiş
              sayılırlar.
            </li>
            <li className="mb-2">
              <strong>
                ozelderszamani.com, kullanım koşullarında yapılan değişiklikleri
                kullanıcılarına e-posta veya platform üzerinden bildirme hakkına
                sahiptir.
              </strong>
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Uyuşmazlıkların Çözümü
          </h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                Kullanıcılar, ozelderszamani.com ile aralarında doğabilecek her
                türlü uyuşmazlıkta öncelikle karşılıklı olarak çözüm arayışına
                gireceklerini kabul ederler.
              </strong>{" "}
              Anlaşmazlıkların dostane yolla çözülememesi durumunda,
              kullanıcılar yasal yollara başvurma hakkına sahiptir.
            </li>
            <li className="mb-2">
              <strong>
                Uyuşmazlıkların çözümünde Türkiye Cumhuriyeti yasaları geçerli
                olacaktır.
              </strong>{" "}
              Kullanıcılar, İstanbul mahkemelerinin ve icra dairelerinin yetkili
              olduğunu kabul ederler.
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Yürürlük ve Kabul</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>
                Bu kullanım koşulları, kullanıcıların platforma üye olmaları ile
                yürürlüğe girer.
              </strong>{" "}
              Kullanıcılar, bu kullanım koşullarını kabul etmekle yükümlüdürler.
            </li>
            <li className="mb-2">
              <strong>
                Kullanıcılar, bu kullanım koşullarını okuyup anladıklarını ve
                tüm hükümlerini kabul ettiklerini beyan ederler.
              </strong>
            </li>
          </ol>
        </section>
        <Separator className="my-4" />

        <footer className="text-center mt-8">
          <p className="text-sm">
            Bu kullanım koşulları en son 08 Ağustos 2024 tarihinde
            güncellenmiştir.
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default TermsOfService;
