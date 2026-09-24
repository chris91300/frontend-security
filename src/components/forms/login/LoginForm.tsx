import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../../../schema-zod/schema';
import { loginAuth } from '../../../api/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { tokenService } from '../../../service/TokenService';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage("");
    try {
      const response = await loginAuth(data);
      tokenService.save(response.data);
      navigate("/books")
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue.";
      console.log(error.status)
      if (error.status === 400) {
        console.log("erreur status 400")
        errorMessage = "identifiant incorrect";
      }

      setErrorMessage(errorMessage);
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <label>
        email
        <input {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      <label>
        password
        <input type='password' {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>



      <button type="submit">Envoyer</button>
      <p className='errorMessage'>{errorMessage}</p>
    </form>
  );
}