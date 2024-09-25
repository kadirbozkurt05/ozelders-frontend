export default function FindTeacher() {
  const list = [
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
    {
      icon: "https://cdn.dribbble.com/users/10086039/screenshots/19080442/media/3448df6cb5af9ec220a724b1bd228812.png",
      name: "Matematik",
      number: 10,
    },
  ];
  return (
    <div className="hidden relative lg:flex py-6 mb-20 h-48 bg-red-400 flex-col">
      <div className=" text-center text-3xl">
        Özel ders almak için en doğru adres
      </div>
      <div className="w-full absolute -bottom-16">
        <div className="flex  flex-col">
          <div className="flex justify-around">
            {list.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-2 cursor-pointer lg:hover:underline flex-col items-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="lg:h-32 h-10 lg:w-32 rounded-full hover:shadow-lg hover:shadow-gray-400 duration-500 lg:hover:scale-105 shadow-black  transition-all"
                    />
                    <div>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
