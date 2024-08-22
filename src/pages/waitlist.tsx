import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Arrow, Inkai, Kinjae, Memoji, Memokoi } from "../components/svgs";
import { BASE_API_URL } from "../constants";
import { Button, Input } from "../components";

export default function Waitlist() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`${BASE_API_URL}/api/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setLoading(false);
      setEmail("");
      // console.log(data.message);
      toast.success(data.message);
    } else {
      setEmail("");
      setLoading(false);
      // console.log(data.message);
      toast.error(data.message);
    }
    return;
  };

  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[100dvh]">
        {/* memoji around the main stuuffs */}
        <figure>
          <Memoji className="absolute top-[100px] left-[196px]" />
        </figure>
        <figure>
          <Memokoi className="absolute top-[180px] right-[196px]" />
        </figure>
        {/*  */}
        <figure>
          <Memoji className="absolute bottom-[155px] right-[252px]" />
        </figure>
        {/*  */}
        <figure>
          <Memoji className="absolute bottom-[180px] right-[196px]" />
        </figure>
        <header className="flex flex-row-reverse items-center justify-center gap-3 my-3">
          {" "}
          <h1 className="text-[20px] leading-[25.78px]  text-[#ED8850] font-bold font-cab md:text-[40px] md:leading-[30.47px]">
            Vistapay
          </h1>
          <img
            src="/images/logo.png"
            alt="vistpay"
            draggable={false}
            className="w-10"
            loading="lazy"
          />
        </header>
        <h3 className="text-dark text-[30px]  md:text-[60px] font-bold leading-[65.92px] ">
          Be the First to <span className="text-primary">know</span>
        </h3>
        <p className="text-dark-100 w-full text-[14px] max-w-[363px] leading-[25.9px] md:text-[25px] md:leading-[38px] text-center md:max-w-[840px] font-normal ">
          Join our waitlist and get exclusive early access to our upcoming
          features and updates.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Input value={email} onChange={handleChange} />
            <Button
              className="absolute bottom-6 right-3"
              disabled={!email}
              loading={loading}
            >
              <Arrow />
            </Button>
          </div>
        </form>
      </section>
      <Toaster />
    </main>
  );
}
