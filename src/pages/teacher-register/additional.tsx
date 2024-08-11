import { FormInput } from "@/components/form-elements";
// import { useState } from "react";
// import { UploadWidget } from "@/components/upload-widget";
import { FormTextArea } from "@/components/form-elements";

export default function Additional({ form }: { form: any }) {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div>
      <img
        src={
          "https://pomerancedentalcare.com/wp-content/uploads/2024/06/placeholder-image-person-jpg-1.jpg"
        }
        alt=""
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="w-full text-center">
        {/* <UploadWidget setImageUrl={setImageUrl} /> */}
      </div>
      <FormInput
        placeholder="https://www.youtube.com/sizin-videonuz"
        label="Video Linki"
        type="text"
        name="video"
        control={form.control}
      />
      <FormTextArea
        control={form.control}
        name="about"
        label="Hakkımda"
        placeholder="Kendinizden bahsedin"
      />
    </div>
  );
}
