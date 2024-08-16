import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

  return (
    <div className="w-full flex flex-col gap-4">
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
      <Label>Video Linkiniz</Label>
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
  );
}
