export type TUser = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: Date;
};

export type TLesson = {
  _id: string;
  label: string;
};

export type TLessonPlace = {
  _id: string;
  label: string;
};
