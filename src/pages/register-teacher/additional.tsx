import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import LeftSide from "./left-side";

type TAdditional = {
  imageUrl: string | null;
  setImageUrl: any;
  videoUrl: string | null;
  setVideoUrl: any;
  about: string | null;
  setAbout: any;
};

export default function Additional({
  imageUrl,
  setImageUrl,
  videoUrl,
  setVideoUrl,
  about,
  setAbout,
}: TAdditional) {
  console.log("imageurl", imageUrl);
  console.log("videoUrl", videoUrl);
  console.log("about", about);

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>
          Son olarak sizden profil fotoğrafı, kendi hakkınızda tanıtıcı bir yazı ve bir youtube video linki istiyoruz.
        </p>
        <br />
        <p>
          Profil fotoğrafı ve video linki opsiyonel olmakla birlikte, velilerin genellikle fotoğraflı ve videolu öğretmenlerle görüşmeye eğilimli olduğunu bilmenizi isteriz.
        </p>
        <br />
        <p>
          Kendi hakkınızda yazarken sizi ön plana çıkaran özelliklerinizi eklemeyi unutmayın. Böylece diğer adaylar arasından ön plana çıkıp daha fazla öğrenciye ulaşma şansınız artar.
        </p>
      </div>
    </div>
  );

  return ( 
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <LeftSide children={childNode} />
    <div className="w-full flex flex-col md:order-2 shadow-lg p-4 md:pl-10 md:flex-row gap-4">
      <div className="w-full">
      <div className="w-full my-4">
        <Heading title="Ek Bilgiler" subtitle="Ek bilgilerinizi ekleyin." />
      </div>
      <Label
        onClick={() => {
          setImageUrl(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s"
          );
        }}
      >
        Profil Resmi
      </Label>
      <div className="w-full flex justify-center">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s"
          }
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <Label>Video Linkiniz (Opsiyonel)</Label>
      <Input
        placeholder="https://www.youtube.com/sizin-videonuz"
        type="text"
        value={videoUrl ? videoUrl : ""}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <Label>Hakkımda</Label>
      <Textarea
        value={about ? about : ""}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Kendinizden bahsedin"
      />
      </div>
    </div>
    </div>
  );
}
