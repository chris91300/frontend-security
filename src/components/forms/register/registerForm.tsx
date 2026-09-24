import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../../../schema-zod/schema';
import { registerAuth } from '../../../api/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: RegisterFormData) => {
    // il faudra ajouter le role "ROLE_USER"
    console.log(data);
    try {
      await registerAuth(data);
      navigate("/login")
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue.";
      if (error.status === 400) {
        errorMessage === error.message;
      }

      setErrorMessage(error.message);
    }

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
      <p className='errorMessage'>{errorMessage}</p>
    </form>
  );
}