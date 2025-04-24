import { FormSchema } from "@/schema/formSchema";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: "name" | "lastName" | "email" | "tel" | "note";
  register: UseFormRegister<FormSchema>;
  type: string;
  error: string;
}

const FormInput = ({ label, name, register, type, error }: FormInputProps) => {
  return (
    <div className="w-full gap-1 flex flex-col">
      <label className="text-start font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(`${name}`)}
        className="border-[#061E4C]  border rounded-lg p-2"
        id={name}
        type={type}
      />
      {error && <p className="text-red-500 text-sm">{`${error}`}</p>}
    </div>
  );
};

export default FormInput;
