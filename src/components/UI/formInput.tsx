import { FormSchema } from '@/schema/formSchema';
import { UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: 'name' | 'lastName' | 'email' | 'tel' | 'note';
  register: UseFormRegister<FormSchema>;
  type: string;
  error: string;
}

const FormInput = ({ label, name, register, type, error }: FormInputProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-start font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(`${name}`)}
        className="rounded-lg border border-[#061E4C] p-2"
        id={name}
        type={type}
      />
      {error && <p className="text-sm text-red-500">{`${error}`}</p>}
    </div>
  );
};

export default FormInput;
