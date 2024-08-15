import { useState } from "react";
import { Input } from "../components";
import { BASE_API_URL } from "../constants";

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
      <section className="flex flex-col items-center justify-center min-h-[100dvh]">
        <h3 className="text-dark text-[60px] font-bold leading-[65.92px] ">
          Be the First to <span className="text-primary">know</span>
        </h3>
        <p className="text-dark-100 text-[25px] leading-[38px] text-center max-w-[840px] font-normal ">
          Join our waitlist and get exclusive early access to our upcoming
          features and updates.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <Input onChange={handleChange} />
          </fieldset>
        </form>
      </section>
    </main>
  );
}
