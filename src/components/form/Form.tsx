import styles from './Form.module.scss';
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    reset();
  }

  return (
    <div>
      <h1>React Hook form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input  
            {...register('firstName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Имя должно содержать не менее 5 символов'
              }
            })}
          />
        </label>
        <div>{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}</div>

        <label>
          Last Name:
          <input 
            {...register('lastName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Фамилие должно быть не менее 5 символов'
              }
            })}
          />
        </label>
        <div>{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}</div>

        <input type="submit" disabled={!isValid} value='Отправить'/>
      </form>
    </div>
  )
}

export default Form;