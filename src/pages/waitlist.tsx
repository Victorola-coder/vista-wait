import { useState } from "react";
import { Button, Input } from "../components";
import { BASE_API_URL } from "../constants";
import { Arrow } from "../components/svgs";

export default function Waitlist() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
      console.log(data.message);
      setEmail("");
      //toast.success(data.message);
    } else {
      setLoading(false);
      console.log(data.message);
      setEmail("");
      //toast.error(data.message);
    }
  };
  return (
    <main>
      <figure></figure>
      <section className="flex flex-col items-center justify-center min-h-[100dvh]">
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
            <Input className="" onChange={handleChange} />
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
    </main>
  );
}
