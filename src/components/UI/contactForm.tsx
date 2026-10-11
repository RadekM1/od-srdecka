'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema, formSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './formInput';
import { emailClient } from '@/lib/services/emailClient';
import FormModal from './form-modal';

const successText = `
        Děkujeme za zprávu.

        Pokud potřebujete něco doplnit k objednávce nebo máte dotazy, klidně se ozvěte. Rády pomůžeme!
      `;

const errorText = `zprávu se nepodařilo odeslat`;

const ContactForm = () => {
  const [formKey, setFormKey] = useState(0);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormSchema) => {
    const { success } = await emailClient(data);
    if (!success) {
      setModalText(errorText);
      setIsShowing(true);
      return;
    }
    setModalText(successText);
    setIsShowing(true);
    reset();
    reset(undefined, {
      keepErrors: false,
      keepDirty: false,
      keepTouched: false
    });
    setFormKey(key => key + 1);
  };

  return (
    <div className="flex w-full max-w-3xl items-center self-center rounded-2xl border-[3px] border-[#061E4C] text-center">
      <form
        key={formKey}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col p-5 text-base"
      >
        <div className="justfy-center w-full flex-col items-center font-oldStandard">
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <FormInput
              label="Jméno*"
              name="name"
              register={register}
              type="text"
              error={errors.name?.message ?? ''}
            />
            <FormInput
              label="Příjmení*"
              name="lastName"
              register={register}
              type="text"
              error={errors.lastName?.message ?? ''}
            />
          </div>
          <div className="mt-5 flex w-full flex-col gap-5 md:flex-row">
            <FormInput
              label="E-mail*"
              name="email"
              register={register}
              type="email"
              error={errors.email?.message ?? ''}
            />
            <FormInput
              label="Telefon*"
              name="tel"
              register={register}
              type="tel"
              error={errors.tel?.message ?? ''}
            />
          </div>
          <div className="mt-5 flex w-full">
            <div className="flex w-full flex-col gap-1">
              <label className="text-start font-semibold" htmlFor="note">
                Zpráva*
              </label>
              <textarea
                {...register('note', { required: 'zpráva je povinný údaj' })}
                id="note"
                rows={10}
                className="rounded-lg border border-[#061E4C] p-2"
                required
              />
              {errors.note && (
                <p className="text-sm text-red-500">{`${errors.note.message}`}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="m-3 w-32 self-center rounded-xl border-[1px] border-[#061E4C] bg-[#061E4C] py-2 text-base text-white duration-300 ease-in-out hover:bg-white hover:text-[#061E4C] disabled:bg-[#061E4C]/50 disabled:hover:text-white"
        >
          {isSubmitting ? 'Odesílám...' : 'Odeslat'}
        </button>
      </form>
      <FormModal
        data={modalText}
        setIsShowing={setIsShowing}
        isShowing={isShowing}
      />
    </div>
  );
};

export default ContactForm;
