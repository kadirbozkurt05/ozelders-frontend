type THeading = {
  title: string;
  subtitle?: string;
  center?: boolean;
  classNameTitle?: string,
  classNameSubtitle?: string
};

export default function Heading({ title, subtitle, center,classNameTitle,classNameSubtitle }: THeading) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className={`text-2xl font-bold ` +classNameTitle}>{title}</h1>
      {subtitle && <p className={`font-light text-neutral-500 mt-2 ` + classNameSubtitle}>{subtitle}</p>}
    </div>
  );
}
