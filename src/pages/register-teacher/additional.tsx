import Heading from "@/components/heading";
import LeftSide from "./left-side";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTeacherInfoStore } from "@/contexts/teacher-info";
import { useNavigate } from "react-router-dom";
import { UploadWidget } from "@/components/upload-widget";

export default function Additional() {
  const { setTeacherInfo } = useTeacherInfoStore();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [videoUrl, setVideoUrl] = useState<string | null>("");
  const [about, setAbout] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleClick() {
    setIsLoading(true);
    if (!about) {
      toast.error("Hakkınızda kısmı boş bırakılamaz.");
      setIsLoading(false);
      return;
    }

    if (about.length < 20) {
      toast.error("Hakkınızda kısmı en az 20 karakter olmalıdır.");
      setIsLoading(false);
      return;
    }

    if (!imageUrl) {
      toast.error("Profil resmi yüklemelisiniz.");
      setIsLoading(false);
      return;
    }

    if (imageUrl && !imageUrl.includes("cloudinary")) {
      toast.error("Lütfen geçerli bir resim yükleyin.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("api/teacher-info", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl,
        videoUrl,
        about,
      }),
    });

    if (!response.ok) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setTeacherInfo(data);
    navigate("/");
    setIsLoading(false);

    toast.success("Kayıt başarılı. Anasayfaya yönlendiriliyorsunuz.");
  }

  console.log("imageUrl", imageUrl);

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>
          Son olarak sizden profil fotoğrafı, kendi hakkınızda tanıtıcı bir yazı
          ve bir youtube video linki istiyoruz.
        </p>
        <br />
        <p>
          Profil fotoğrafı ve video linki opsiyonel olmakla birlikte, velilerin
          genellikle fotoğraflı ve videolu öğretmenlerle görüşmeye eğilimli
          olduğunu bilmenizi isteriz.
        </p>
        <br />
        <p>
          Kendi hakkınızda yazarken sizi ön plana çıkaran özelliklerinizi
          eklemeyi unutmayın. Böylece diğer adaylar arasından ön plana çıkıp
          daha fazla öğrenciye ulaşma şansınız artar.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row">
      <LeftSide children={childNode} />
      <div className="w-full flex flex-col md:order-2 shadow-lg p-4 md:pl-10 md:flex-row gap-4">
        <div className="w-full">
          <div className="w-full my-4">
            <Heading title="Ek Bilgiler" subtitle="Ek bilgilerinizi ekleyin." />
          </div>
          <Label>Profil Resmi</Label>
          <div className="w-full flex justify-center relative">
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
            <UploadWidget setImageUrl={setImageUrl} />
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
          <div className="flex flex-row gap-4 mt-4 lg:mt-8">
            <Button
              variant={"outline"}
              onClick={handleClick}
              disabled={isLoading}
            >
              Devam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
