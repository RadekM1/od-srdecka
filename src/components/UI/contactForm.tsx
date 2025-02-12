const ContactForm = () => {
  return (
    <div className="items-center flex border-[3px] border-[#061E4C] rounded-2xl self-center text-center w-full max-w-3xl">
      <form className="w-full text-base p-5 flex flex-col">
        <div className="w-full  font-oldStandard  flex-col justfy-center items-center">
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <div className="w-full flex gap-1 flex-col">
              <label className="text-start font-semibold" htmlFor="firstName">
                Jméno*
              </label>
              <input
                required
                className="border-[#061E4C]  border rounded-lg p-2"
                id="firstName"
                name="firstName"
                type="text"
              />
            </div>
            <div className="w-full gap-1 flex flex-col">
              <label className="text-start font-semibold" htmlFor="lastName">
                Příjmení*
              </label>
              <input
                required
                className="border-[#061E4C]  border rounded-lg p-2"
                id="lastName"
                name="lastName"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full mt-5 gap-5 flex-col md:flex-row">
            <div className="w-full gap-1 flex flex-col">
              <label className="text-start font-semibold" htmlFor="email">
                E-mail*
              </label>
              <input
                required
                className="border-[#061E4C]  border rounded-lg p-2"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="w-full gap-1 flex flex-col">
              <label className="text-start font-semibold" htmlFor="tel">
                Telefon*
              </label>
              <input
                required
                className="border-[#061E4C] border  rounded-lg p-2"
                id="tel"
                name="tel"
                type="tel"
              />
            </div>
          </div>
          <div className="flex mt-5 w-full">
            <div className="w-full gap-1 flex flex-col">
              <label className="text-start font-semibold" htmlFor="message">
                Zpráva*
              </label>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="border-[#061E4C] p-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </div>
        <button className="bg-[#061E4C] m-3 self-center text-base hover:bg-white hover:text-[#061E4C] border-[1px] border-[#061E4C]  duration-300 ease-in-out  text-white w-32 py-2 rounded-xl">
          Odeslat
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
