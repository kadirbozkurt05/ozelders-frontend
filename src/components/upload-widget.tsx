import { Pencil } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  setImageUrl: any;
};

export function UploadWidget({ setImageUrl }: Props) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    // @ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: preset,
        sources: ["local", "url", "camera", "facebook", "instagram"],
        multiple: true,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        },
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <>
      <Pencil
      className="absolute top-0 right-0 cursor-pointer "
        onClick={(e) => {
          e.preventDefault();
          // @ts-ignore
          widgetRef.current.open();
        }}
      />
    </>
  );
}
