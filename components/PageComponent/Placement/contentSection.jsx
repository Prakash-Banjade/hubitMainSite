import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const ContentSection = () => {
  const benefits = [
    "first benefit",
    "seconde benefit",
    "third benefit",
    "fourth benefit",
    "fifth benefit",
    "sixth benefit",
  ];
  return (
    <section className="px-2 md:px-4 lg:px-20 xl:px-24 xxl:px-32 mt-8">
      <div className="flex justify-between min-h-[350px]  relative">
        <div className="max-w-2xl">
          <h2 className="text-main">What we do for your placement?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio
            praesentium impedit, neque consequatur aliquam veniam nemo non
            architecto. Voluptatibus deleniti vel laudantium pariatur delectus,
            rerum molestias maiores placeat veritatis, obcaecati quibusdam
            architecto assumenda vero eveniet, amet sint voluptas incidunt esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae,
            earum adipisci dolore iste et ab ut voluptas magni culpa eaque
            soluta corrupti in quam fuga odio, aliquam, rerum eveniet.
          </p>
        </div>
        <div>
          <div className="absolute right-0 top-[-50px] h-[450px] w-96 box-shadow">
            <Image
              src="/images/portal.jpg"
              alt="image of something"
              layout="fill"
              objectfit="cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-main">Sake and Benefits</h2>
        <div className="flex flex-wrap justify-between ml-12">
          {benefits.map((benefit) => {
            return (
              <>
                <div className="flex gap-2 justify-center align-center mb-6 text-black text-lg font-medium">
                  <BsCheckCircle key={benefit} className="text-2xl font-bold" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
