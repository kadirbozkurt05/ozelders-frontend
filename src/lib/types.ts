export type TUser = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: Date;
  role: "user" | "teacher";
};

export type TLesson = {
  _id: string;
  label: string;
};

export type TLessonPlace = {
  _id: string;
  label: string;
};

export type TAddress = {
  city: string;
  district: string;
};

export type TTeacherInfo = {
  teacherId: string;
  address: TAddress;
  lessons: string[];
  lessonPlaces: string[];
  lessonDistricts: string[];
  photo: string;
  video: string;
  about: string;
  lessonPrice: number;
  reviews: string[];
};