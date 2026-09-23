import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../../../schema-zod/schema';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    // il faudra ajouter le role "ROLE_USER"
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>
        <p>nom</p>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>

      <label>
        <p>email</p>
        <input {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      <label>
        <p>password</p>
        <input type='password' {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>



      <button type="submit">Envoyer</button>
    </form>
  );
}