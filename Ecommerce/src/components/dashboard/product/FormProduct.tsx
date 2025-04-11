import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { ProductFormValues, productSchema } from '../../../lib/validators';
import { IconArrowBack } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { SectionFormProducts } from './SectionFormProducts';
import { InputForm } from './InputForm';
import { FeaturesInput } from './FeaturesInput';
import { useEffect } from 'react';
import { generateSlug } from '../../../helpers';
import { VariantsInput } from './VariantsInput';

interface Props{
    tittleForm: string;
}

export const FormProduct = ({tittleForm}: Props) => {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<ProductFormValues>(
    {
        resolver: zodResolver(productSchema)
    });

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    const watchName = watch('name'); //esto es para ver el valor del input name

    useEffect(() => {
        if (!watchName) return 

        const generatedSlug = generateSlug(watchName);
        setValue('slug', generatedSlug, {shouldValidate: true});


    }, [watchName, setValue]);
  
  
  
  
    return (
    <div className='flex flex-col gap-6 relative'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <button
                className='bg-white p-1.5 rounded-md shadow-sm border border-slate-200 transition-all 
                group-hover:scale-105'
                onClick={() => navigate(-1)}
                >
                    <IconArrowBack size={18} className='text-gray-950 transition-all group-hover:scale-125'/>
                </button>

                <h2 className='font-bold tracking-tight capitalize text-gray-950'>
                    {tittleForm}
                </h2>
            </div>
        </div>

        <form className='grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max flex-1'
        onSubmit={onSubmit}
        >
            <SectionFormProducts 
            tittleSection='Products details' 
            className='lg:col-span-2 lg:rows-span-2'
            >
                <InputForm
                type='text'
                placeholder='Example: T-shirt Nike'
                label='Name'
                name='name'
                register={register}
                errors={errors}
                required
                />
                <FeaturesInput control={control} errors={errors}/>
            </SectionFormProducts>

            <SectionFormProducts>
                <InputForm
                type='text'
                label='Slug'
                placeholder='t-shirt-nike'
                name='slug'
                register={register}
                errors={errors}
                />

               <InputForm
                type='text'
                label='Brand'
                placeholder='Nike'
                name='brand'
                register={register}
                errors={errors}
                required
                />
            </SectionFormProducts>

            <SectionFormProducts tittleSection='Product Variants' className='lg:col-span-2 h-fit'>
                <VariantsInput
                control = {control}
                errors={errors}
                register={register}
                />

            </SectionFormProducts>





            <div className='flex gap-3 absolute top-0 right-0 '>
                <button className='btn-secondary-outline ' type='button' onClick={() => navigate(-1)}>
                    Cancel
                </button>

                <button className='btn-primary' type='submit'>
                    Save product
                </button>

            </div>


        </form>
      
    </div>
  );
};