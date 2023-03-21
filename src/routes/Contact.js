import React from 'react'
import CommonHero from './../components/Common/CommonHero';
import ContactForm from './../components/Contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <CommonHero heading="Contact." paragraph="Contact For Dev services" />
      <ContactForm />
    </div>
  )
}

export default Contact