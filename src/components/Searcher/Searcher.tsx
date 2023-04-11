import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import { SearcherProps, SearchFormFields } from './SearcherTypes';

const cx = classNames.bind(styles);

function Searcher({ handleSubmitSearch }: SearcherProps) {
  const { register, handleSubmit, getValues } = useForm<SearchFormFields>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<SearchFormFields> = (data) => {
    const inputSubmitValue = getValues('searchRequest');
    handleSubmitSearch(inputSubmitValue);
    localStorage.setItem('inputValue', inputSubmitValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('search__wrapper')}>
      <input
        type="text"
        id="input-search"
        data-testid="quiz-name-input"
        placeholder="Search...(enter character name)"
        className={cx('search__input')}
        {...register('searchRequest', { required: 'Please, correct data', minLength: 2 })}
      />
    </form>
  );
}

export default Searcher;

// function Searcher({ handleSubmit }: SearcherProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     getValues,
//     control,
//   } = useForm<FormFields>({
//     mode: 'onSubmit'
//   });
//
//   const searcherRef = useRef<HTMLInputElement>(null);
//
//   useEffect(() => {
//     const previousInputValue = localStorage.getItem('inputValue') || '';
//
//     if (searcherRef.current) {
//       const refVariable: HTMLInputElement = searcherRef.current;
//       refVariable.value = previousInputValue;
//       return () => {
//         localStorage.setItem('inputValue', refVariable.value);
//       };
//     }
//   }, []);
//
//   const handleFormSubmit = (event: FormEvent) => {
//     handleSubmit(event.target);
//   };
//
//
//   return (
//     <form className={cx('search__wrapper')} onSubmit={handleFormSubmit}>
//       <input
//         ref={searcherRef}
//         type="text"
//         placeholder="Search..."
//         className={cx('search__input')}
//       />
//       <img src={SearchIcon} alt="Search icon" className={cx('search__input-icon')} />
//     </form>
//   );
// }
//
// export default Searcher;
