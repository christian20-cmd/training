import { ArrowRightCircle, Minus } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-black text-white my-32">
      <div className="mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Pourquoi nous choisir ?
        </h2>

        {/* items */}

        <div className="place-self-center">

              {/* Item 01 */}
            <div className="mb-10">
              <div className="flex items-start ">
                <p className="text-red-500 flex text-3xl">
                  01 <Minus/>
                </p>
                <div>
                  <h3 className="md:text-3xl text-md font-semibold mb-2 flex items-center gap-40 md:gap-40 lg:gap-48 border-b-2 border-red-500">High Quality Hardware <ArrowRightCircle className="text-red-600"/></h3>
                  <p className="md:text-xl text-sm text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Lorem dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 02 */}
            <div className="mb-10 ml-14 md:ml-40 lg:ml-80 mx-auto">
              <div className="flex items-start">
                <p className="text-red-500 flex text-3xl">
                  02 <Minus/>
                </p>
                <div>
                  <h3 className="md:text-3xl text-md font-semibold mb-2 flex items-center gap-40 md:gap-40 lg:gap-44 border-b-2 border-red-500">High Quality Hardware <ArrowRightCircle className="text-red-600"/></h3>
                  <p className="md:text-xl text-sm text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Lorem dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 03 */}
            <div className="mb-10">
              <div className="flex items-start">
                <p className="text-red-500 flex text-3xl">
                  03 <Minus/>
                </p>
                <div>
                  <h3 className="md:text-3xl text-md font-semibold mb-2 flex items-center gap-40 md:gap-40 lg:gap-44 border-b-2 border-red-500">High Quality Hardware <ArrowRightCircle className="text-red-600"/></h3>
                  <p className="md:text-xl text-sm text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Lorem dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;