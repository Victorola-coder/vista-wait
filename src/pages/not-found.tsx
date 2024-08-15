import { SEO } from "../components";

const Error = () => {
  return (
    <>
      <SEO title="Page not Found" />
      <div>
        <div className="flex flex-col items-center justify-center w-full h-screen gap-7">
          <h1 className="text-[40px] leading-[25.78px]  text-[#ED8850] font-bold font-cab md:text-[40px] md:leading-[30.47px]">
            Vistapay
          </h1>
          <img
            src="/images/logo.png"
            alt="vistpay"
            draggable={false}
            className="w-20"
            loading="lazy"
          />

          <h1 className="text-[#141517] font-extrabold mx-4 text-center font-cab">
            404! <br />{" "}
            <span className="font-medium">
              page not found due to legal reasons,chief!🤕
            </span>
          </h1>
          <a
            className="text-[#141517] font-sail p-2 outline-dashed outline-[#ED8850] transition-all duration-300 active:scale-[0.95]"
            href="/"
          >
            Go to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
