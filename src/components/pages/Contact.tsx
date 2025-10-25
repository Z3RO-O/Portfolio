import { useState, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '@/content_option';
import { contactConfig } from '@/content_option';

interface FormData {
  email: string;
  name: string;
  message: string;
  loading: boolean;
  show: boolean;
  alertmessage: string;
  variant: string;
}

const Contact = () => {
  const [formData, setFormdata] = useState<FormData>({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: 'Success! Thank you for your message',
            variant: 'success',
            show: true,
          });
        },
        error => {
          console.log(error.text);
          setFormdata({
            ...formData,
            alertmessage: `Failed to send. ${error.text}`,
            variant: 'danger',
            show: true,
          });
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <div className='max-w-7xl mx-auto px-4'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{meta.title} | Contact</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='w-full px-4'>
          <h1 className='text-5xl mb-4'> Contact Me </h1>
          <hr className='border-(--secondary) text-left' />
        </div>
        <div className='flex flex-wrap lg:mx-8'>
          <div className='w-full px-4'>
            {formData.show && (
              <div
                className={`relative p-4 my-4 border rounded-none ${
                  formData.variant === 'success'
                    ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-900/20 dark:border-green-600 dark:text-green-400'
                    : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-900/20 dark:border-red-600 dark:text-red-400'
                }`}
              >
                <p className='my-0 pr-8'>{formData.alertmessage}</p>
                <button
                  type='button'
                  className='absolute top-2 right-4 text-4xl leading-none opacity-50 hover:opacity-100'
                  onClick={() => setFormdata({ ...formData, show: false })}
                  aria-label='Close'
                >
                  ×
                </button>
              </div>
            )}
          </div>
          <div className='flex flex-col lg:flex-row w-full mt-16 gap-6 px-4'>
            <div className='flex flex-col gap-4 w-full lg:w-5/12'>
              <h3 className='text-3xl text-(--secondary) my-4'>Get in touch</h3>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  className='underline!'
                  href={`mailto:${contactConfig.YOUR_EMAIL}`}
                >
                  {contactConfig.YOUR_EMAIL}
                </a>
              </p>
              {contactConfig.YOUR_PHONE && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                </p>
              )}
              <p>{contactConfig.description}</p>
              <p>{contactConfig.description2}</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className='w-full [&_.form-control]:py-5.5 [&_.form-control]:px-3 [&_.form-control]:leading-normal [&_.form-control]:text-(--secondary) [&_.form-control]:bg-(--primary) [&_.form-control]:rounded-none [&_.form-control]:border [&_.form-control]:border-(--secondary) [&_.form-control::placeholder]:text-(--secondary) [&_.form-control::placeholder]:opacity-70 [&_input.form-control]:mb-8 [&_input.form-control]:h-[calc(2.5em+0.75rem+2px)]'
            >
              <div className='flex flex-col'>
                <div className='flex flex-col lg:flex-row lg:gap-6 w-full'>
                  <input
                    className='form-control w-full lg:w-1/2'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={formData.name || ''}
                    type='text'
                    required
                    onChange={handleChange}
                  />
                  <input
                    className='form-control w-full lg:w-1/2'
                    id='email'
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={formData.email || ''}
                    required
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  placeholder='Message'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <br />
              <button
                className='btn-animated inline-block py-1 px-[19px] text-(--secondary) relative border-2 border-(--secondary) overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.55,0,0.1,1)] rounded-none hover:shadow-[8px_8px_0px_var(--secondary),-8px_-8px_0px_var(--secondary)] group'
                type='submit'
              >
                <span className='relative z-10'>
                  {formData.loading ? 'Sending...' : 'Send'}
                </span>
                <div className='absolute w-full h-full bg-black top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.55,0,0.1,1)] -z-40'></div>
                <div className='absolute w-full h-full bg-(--primary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                <div className='absolute w-full h-full bg-(--secondary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          formData.loading
            ? 'fixed top-0 left-0 right-0 h-[10px] z-999999999 bg-(--secondary) translate-x-full animate-[shift-rightwards_1s_ease-in-out_infinite] delay-300'
            : 'hidden'
        }
      ></div>
    </HelmetProvider>
  );
};

export default Contact;
