
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  weight: yup
    .number()
    .typeError('Вага повинна бути числом')
    .required('Вкажіть вагу')
    .positive('Вага повинна бути додатнім числом')
    .max(100, 'Максимальна вага — 100 кг'),
  dimensions: yup
    .string()
    .required('Вкажіть габарити'),
  destination: yup
    .string()
    .required('Вкажіть місце призначення'),
});

function DomesticCalculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Дані форми:', data);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Калькулятор доставки</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="weight">Вага (кг):</label>
          <input
            id="weight"
            type="text"
            {...register('weight')}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          <p style={{ color: 'red', fontSize: '12px' }}>{errors.weight?.message}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="dimensions">Габарити (ДxШxВ см):</label>
          <input
            id="dimensions"
            type="text"
            {...register('dimensions')}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          <p style={{ color: 'red', fontSize: '12px' }}>{errors.dimensions?.message}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="destination">Місце призначення:</label>
          <input
            id="destination"
            type="text"
            {...register('destination')}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          <p style={{ color: 'red', fontSize: '12px' }}>{errors.destination?.message}</p>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Розрахувати
        </button>
      </form>
    </div>
  );
}

export default DomesticCalculator;
