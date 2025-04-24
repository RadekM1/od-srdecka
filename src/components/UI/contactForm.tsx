"use client";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./formInput";
import { emailClient } from "@/lib/services/emailClient";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    const { success } = await emailClient(data);
    if (success) {
      reset();
      // eslint-disable-next-line
      isSubmitted;
      return;
    }
  };

  return (
    <div className="items-center flex border-[3px] border-[#061E4C] rounded-2xl self-center text-center w-full max-w-3xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-base p-5 flex flex-col"
      >
        <div className="w-full  font-oldStandard  flex-col justfy-center items-center">
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <FormInput
              label="Jméno*"
              name="name"
              register={register}
              type="text"
              error={errors.name?.message ?? ""}
            />
            <FormInput
              label="Příjmení*"
              name="lastName"
              register={register}
              type="text"
              error={errors.lastName?.message ?? ""}
            />
          </div>
          <div className="flex w-full mt-5 gap-5 flex-col md:flex-row">
            <FormInput
              label="E-mail*"
              name="email"
              register={register}
              type="email"
              error={errors.email?.message ?? ""}
            />
            <FormInput
              label="Telefon*"
              name="tel"
              register={register}
              type="tel"
              error={errors.tel?.message ?? ""}
            />
          </div>
          <div className="flex mt-5 w-full">
            <div className="w-full gap-1 flex flex-col">
              <label className="text-start font-semibold" htmlFor="note">
                Zpráva*
              </label>
              <textarea
                {...register("note", { required: "zpráva je povinný údaj" })}
                id="note"
                rows={10}
                className="border-[#061E4C] p-2 border rounded-lg"
                required
              />
              {errors.note && (
                <p className="text-red-500 text-sm">{`${errors.note.message}`}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#061E4C] m-3 disabled:bg-[#061E4C]/50 disabled:hover:text-white self-center text-base hover:bg-white hover:text-[#061E4C] border-[1px] border-[#061E4C]  duration-300 ease-in-out  text-white w-32 py-2 rounded-xl"
        >
          {isSubmitting ? "Odesílám..." : "Odeslat"}
        </button>
        {isSubmitted && (
          <p className="text-green-600 text-sm">zpráva byla úspěšně odeslána</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
