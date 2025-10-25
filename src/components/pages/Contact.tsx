import { useState, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '@/content_option';
import { Container, Row, Col, Alert } from 'react-bootstrap';
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
            alertmessage: 'SUCCESS! ,Thankyou for your messege',
            variant: 'success',
            show: true,
          });
        },
        error => {
          console.log(error.text);
          setFormdata({
            ...formData,
            alertmessage: `Faild to send!,${error.text}`,
            variant: 'danger',
            show: true,
          });
          document.getElementsByClassName('co_alert')[0].scrollIntoView();
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
      <Container>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{meta.title} | Contact</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div>
          <h1 className='display-4 m-0'>Contact Me</h1>
          <hr className='border-(--secondary) text-left' />
        </div>
        <Row>
          <Col lg={12}>
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? 'd-block' : 'd-none'
              }`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className='my-0'>{formData.alertmessage}</p>
            </Alert>
          </Col>
          <div className='flex mt-4 gap-6'>
            <Col lg={5}>
              <h3 className='text-(--secondary) my-4'>Get in touch</h3>
              <div>
                <p className='p-0'>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                    {contactConfig.YOUR_EMAIL}
                  </a>
                </p>
                {contactConfig.YOUR_PHONE && (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                  </p>
                )}
              </div>
              <p>{contactConfig.description}</p>
              <p>{contactConfig.description2}</p>
            </Col>
            <form
              onSubmit={handleSubmit}
              className='w-100 [&_.form-control]:py-5.5 [&_.form-control]:px-3 [&_.form-control]:leading-normal [&_.form-control]:text-(--secondary) [&_.form-control]:bg-(--primary) [&_.form-control]:rounded-none [&_.form-control]:border [&_.form-control]:border-(--secondary) [&_.form-control::placeholder]:text-(--secondary) [&_.form-control::placeholder]:opacity-70 [&_input.form-control]:mb-8 [&_input.form-control]:h-[calc(2.5em+0.75rem+2px)]'
            >
              <div className='flex flex-col gap-6'>
                <div className='flex flex-wrap gap-6'>
                  <input
                    className='form-control rounded-0'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={formData.name || ''}
                    type='text'
                    required
                    onChange={handleChange}
                  />
                  <input
                    className='form-control rounded-0'
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
                  className='form-control rounded-0'
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
                className='inline-block py-1 px-[19px] text-(--secondary) relative border-2 border-(--secondary) overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer rounded-none hover:shadow-[8px_8px_0px_var(--secondary),-8px_-8px_0px_var(--secondary)] group'
                type='submit'
              >
                {formData.loading ? 'Sending...' : 'Send'}
                <div className='absolute w-full h-full bg-black top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.55,0,0.1,1)] -z-4'></div>
                <div className='absolute w-full h-full bg-(--primary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] -z-3'></div>
                <div className='absolute w-full h-full bg-(--secondary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.55,0,0.1,1)] -z-3'></div>
              </button>
            </form>
          </div>
        </Row>
      </Container>
      <div
        className={
          formData.loading
            ? 'fixed top-0 left-0 right-0 h-[10px] z-999999999 bg-(--secondary) translate-x-full animate-[shift-rightwards_1s_ease-in-out_infinite] delay-300'
            : 'd-none'
        }
      ></div>
    </HelmetProvider>
  );
};

export default Contact;
