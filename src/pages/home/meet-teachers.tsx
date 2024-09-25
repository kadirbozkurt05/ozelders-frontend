import Container from "@/components/container";

export default function MeetTeachers() {
  return (
    <div className=" lg:h-72 flex items-center justify-center bg-rose-300">
      <Container className=" justify-center items-center text-justify flex flex-col gap-4 lg:gap-10">
        <div className=" lg:text-7xl text-3xl font-extrabold text-justify">
          Uzman Hocalarla Tanış
        </div>
        <div>
          Burada harika hocalarla tanışıp, başarını arttır. Eğer öğretmenden
          memnun kalmazsan hiç sorun değil. Burada binlerce öğretmen var.
        </div>
      </Container>
    </div>
  );
}
