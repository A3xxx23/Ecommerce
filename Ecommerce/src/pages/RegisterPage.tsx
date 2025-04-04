//zod esquema de validacion para manejar formularios

import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/auth/useRegister";
import { IconLoader } from "@tabler/icons-react";



export const userRegisterSchema = z.object({
  email: z
  .string()
  .email('Invalid email address'),

  password: z
  .string()
  .min(6, 'Password must be at least 6 characters long'),

  fullname: z
  .string()
  .min(1, 'Full name is required'),

  phone: z
  .string()
  .optional(),
});

export type UserRegisterFormValues = z.infer<
    typeof userRegisterSchema
>;

export const RegisterPage = () => {

  //desescructurar el objeto de validacion del hook form

  const {
    register, 
    handleSubmit, 
    formState: { errors },
  
  } = useForm<UserRegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
      phone: '',
    },
    resolver: zodResolver(userRegisterSchema),
  });

  const { mutate, isPending } = useRegister();

  const onRegister = handleSubmit(data => {
    const { email, password, fullname, phone } = data;

    mutate({email, password, fullname, phone});
  });

  console.log(errors);

  return (
      <div className="h-full flex flex-col items-center mt-12 gap-5">
        <h1 className="text-4xl font-bold capitalize text-black">
          Register
        </h1>

        <p className="text-sm font-medium text-black">
          Please register to create an account
        </p>

        {
          isPending ? (
            <div className="flex w-full h-full justify-center mt-20">
              <IconLoader className="animate-spin-clockwise text-black" size={60}/>

            </div>
          ) : (
            <>
          <form className="flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]" 
          onSubmit={onRegister}
          >
            <input 
            type="text" 
            placeholder="Enter your full name"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            {...register("fullname")}
            />
            {
              errors.fullname && (
                <p className="text-red-500">
                  {errors.fullname.message}
                </p>
              )
            }

            <input 
            type="text" 
            placeholder="Enter your phone number"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            {...register("phone")}
            /> 

            {   
              errors.phone && (
                <p className="text-red-500">
                  {errors.phone.message}
                </p>
              )
            }

            <input 
            type="email" 
            placeholder="Enter your email"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            {...register("email")}
            />

            {   
              errors.email && (
                <p className="text-red-500">
                  {errors.email.message}
                </p>
              )
            }

           <input 
            type="password" 
            placeholder="Enter your password"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            {...register("password")}
            />

            {
              errors.password && (
                <p className="text-red-500">
                  {errors.password.message}
                </p>
              )
            }

            <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full w-full mt-5">
            Register
            </button>

          </form>

          <p className="text-sm font-medium text-stone-800">
            Already have an account? 
            <Link to={"/login"} className="underline ml-2">
              Login
            </Link>
          </p>
        </>
          )
        }
        
      </div>
  );
};

