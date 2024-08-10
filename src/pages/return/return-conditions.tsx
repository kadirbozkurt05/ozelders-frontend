import Container from "@/components/container";
import { Separator } from "@radix-ui/react-separator";

const ReturnPolicy = () => {
  return (
    <Container>
    <div className="p-8 text-sm text-gray-700">
      <div className="flex md:h-24 h-10 space-x-4 text-sm">
        
          <Separator orientation="vertical" className=" bg-red-500 md:w-1" />
          <div className="flex flex-row h-full justify-end">
            <p className="flex flex-row items-center md:text-3xl">
              Üyelik ve İade Şartları
            </p>
          </div>
        </div>
        <br />
        <br />
      <p className="mb-4">
        <strong>ozelderszamani.com</strong> aracılığı ile ders vermek isteyen kişiler üye olup diledikleri üyelik paketinden yararlanabilir. Ücretli üye olmak isteyen kişiler ödeme yöntemlerinden kendilerince en uygun olanı seçip üyelik işlemlerini tamamlayabilirler. Kredi kartı ile yapılan tüm işlemler <strong>SSL güvenlik sertifikası</strong> güvencesi altındadır ve hiçbir şekilde başka bir kişiyle veya kurumla paylaşılmaz.
      </p>
      <p className="mb-4">
        <strong>ozelderszamani.com</strong>'un sunduğu ücretli üyelik hizmetinin iptalinin talep edilmesi durumunda, ücret iade talebi için ödeme yaptığı tarihten itibaren 7 (yedi) gün içerisinde iade talebinde bulunulması gerekmektedir.
      </p>
      <p className="mb-4">
        <strong>ozelderszamani.com</strong> üzerinden premium üyelik paketi satın alan eğitmenler, herhangi bir ders talebiyle ilgilendiğinde veya iletişime geçtiğinde iade alma hakkı sonlanır.
      </p>
      <p className="mb-4">
        Ücretli üye statüsünde bulunduğunuz sürece size gelen tüm mesajlara cevap verebilir ve ders taleplerinin detaylarını görebilirsiniz. Ders veren ile ders alan arasındaki maddi konularda <strong>ozelderszamani.com</strong>'un bir fonksiyonu yoktur.
      </p>
      <p className="mb-4">
        <strong>ozelderszamani.com</strong>’a sistemsel sebeplerden dolayı ulaşılamaması durumunda, kullanmadığınız süre kadar üyeliğiniz uzatılacaktır.
      </p>
      <p className="mb-4">
        <strong>ozelderszamani.com</strong> gerekli durumlarda, sitede yer alan kullanıcılara bilgi vermeksizin fiyat politikasını değiştirme yetkisine sahiptir. Bu fiyat değişikliğinden sitede kayıtlı olan ve üyelik süreleri dolmayan kullanıcılar etkilenmeyecektir. Kullanıcılar, üyeliklerini yenilemek istediklerinde yeni fiyat politikası geçerli olacaktır.
      </p>
      <p className="mb-4">
        Aynı şekilde, ozelderszamani.com aracılığıyla sunulan hizmetlerin kapsamı, özellikleri veya fiyatları, kullanıcıya bildirimde bulunulmaksızın değiştirilebilir. Ancak, bu tür değişiklikler mevcut üyelikler üzerinde geriye dönük bir etkiye sahip olmayacaktır. Üyelik süresi dolduktan sonra yapılacak yenilemelerde, güncellenmiş koşullar geçerli olacaktır.
      </p>
    </div>
    </Container>
  );
};

export default ReturnPolicy;
