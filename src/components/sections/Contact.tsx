import { GreenTitle, MenuButton, SectionBorder } from "../ui/elements";

export default function Team() {
  return (
    <div className="flex flex-col w-full h-auto text-black justify-start items-center orange-bg">
      <SectionBorder />
      <div className="flex w-full h-auto bg-black bg-opacity-10">
        <div className="flex flex-col w-[49.5%] h-auto text-2xl py-10 gap-6 items-end">
          <GreenTitle flip={true} title="Contact Us" />
          <div className="flex w-full h-auto justify-center items-center">
            <div>
              <form className="flex flex-col gap-2 text-sm text-black font-bold">
                <div className="">
                  <label className="">Full Name</label>
                  <input
                    className="w-full shadow-black shadow-lg appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="names"
                    placeholder="Names"
                  />
                </div>
                <div className="">
                  <label className="">Email</label>
                  <input
                    className="w-full shadow-black shadow-lg appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div className="">
                  <label className="">Message</label>
                  <textarea
                    className="w-full shadow-black shadow-lg appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    placeholder="Your message here"
                  />
                </div>
                <div className="flex items-center justify-between m-2">
                  <MenuButton isActive={false} title="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[1%] h-auto text-2xl bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400"></div>
        <div className="flex flex-col w-[49.5%] h-auto text-2xl py-6 gap-6 items-start">
          <div className="flex w-full h-auto justify-center items-center">
            <img
              className="w-1/3 h-auto glow-effect"
              src="/assets/sticker.png"
              alt="Sticker"
            />
          </div>
          <div className="flex gap-6">
            <GreenTitle flip={false} title="Social Medias" />
            <button>
              <img
                className="w-10 h-auto glow-effect hover:animate-pulse"
                src="/assets/instagram.png"
                alt="instagram"
              />
            </button>
            <button>
              <img
                className="w-12 h-auto glow-effect hover:animate-pulse"
                src="/assets/youtube.png"
                alt="youtube"
              />
            </button>
            <button>
              <img
                className="w-10 h-auto glow-effect hover:animate-pulse"
                src="/assets/email.png"
                alt="email"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
