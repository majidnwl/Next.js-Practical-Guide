import BreadCrumb from '@/components/elements/BreadCrumb'
import ContactUs from '@/components/contact/ContactUs'
import React from 'react'

const ContactUsPage = () => {
    return (
        <>
            <BreadCrumb header="Contact Us" text="Stay Contact with us" />
            <ContactUs />
        </>
    )
}

export default ContactUsPage