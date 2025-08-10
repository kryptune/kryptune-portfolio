import React from 'react';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [messageStatus, setMessageStatus] = React.useState("Send Message")

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => {
            return {...prevData, [name]: value}
        })
        console.log(formData)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessageStatus("Sending...")
        const endpoint = '/api/send-email'
        try {
            const response = await fetch (endpoint, {
                method: 'POST',
                headers:{
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify(formData) 
            })
            if (response.ok){
                setMessageStatus("Message sent successfully");
                alert('Your message has been sent successfully!');
                setFormData(
                    {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                );
            }else{
                setMessageStatus("Failed to send message.");
                alert('Failed to send your message. Please try again later.');
            }
        }catch(error){
            console.error("Error: ", error)
            setMessageStatus("Failed to send message.");
            alert('Failed to send your message. Please try again later.');
        }
    }

    return (
        <div className="contact" id="contact">
            <h1 className='contact-title'>Contact Me</h1>
            <p className='contact-description'>Hello there! I'm always available for new opportunities and discussions, so please don't hesitate to get in touch. Have an amazing day!</p>
            <div className='contact-main-container'>
            <div className='contact-info-container'>
                <h2 className='contact-info-title'>Contact Information</h2>
                <div className='contact-info-list'>
                    <div className='contact-info-email'>
                        <i className="fa-solid fa-envelope icon"></i>
                        <span className='info-title'>Email: </span>
                        <a href="mailto:rolandodelatorre01@gmail.com" className='contact-info-link info-details'>
                            rolandodelatorre03@gmail.com
                        </a>
                    </div>
                    <div className='contact-info-phone'>
                        <i className="fa-solid fa-phone icon"></i>
                        <span className='info-title'>Phone: </span>
                        <span className='contact-info-number info-details'>+63 950 236 0386</span>
                    </div>
                    <div className='contact-info-address'>
                        <i className="fa-solid fa-location-dot icon"></i>
                        <span className='info-title'>Address: </span>
                        <span className='contact-info-location info-details'>Bicol, Philippines</span>
                    </div>
                </div>
                <h2 className='contact-social-title'>Connect with Me</h2>
                <div className='contact-social-links'>
                    <a href="https://github.com/kryptune" target="_blank" rel="noopener noreferrer" className='contact-social-github'>
                        <i className="fa-brands fa-github social-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rolando-de-la-torre-030387358/" target="_blank" rel="noopener noreferrer" className='contact-social-linkedin'>
                        <i className="fa-brands fa-linkedin social-icon"></i>
                    </a>
                    <a href="mailto:rolandodelatorre01@gmail.com" className='contact-info-email'>
                        <i className="fa-solid fa-envelope social-icon"></i>
                    </a>
                </div>
            </div>
            <form className='contact-form-container'>
                <h2 className='contact-form-title'>Send Me a Message</h2>
                <div className='name-email-container'>
                    <div className='name-container'>
                        <label htmlFor="contact-form-name" className='form-label'>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="contact-form-name"
                            placeholder="John Wick"
                            value={formData.name}
                            onChange={handleChange}
                            className='contact-form-name input'
                        />
                    </div>
                    <div className='email-container'>
                        <label htmlFor="contact-form-email" className='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="contact-form-email"
                            placeholder="johnwick@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className='contact-form-email input'
                        />
                    </div>
                </div>
                <label htmlFor="contact-form-subject" className='form-label'>Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="contact-form-subject"
                    placeholder="Type your subject title here..."
                    value={formData.subject}
                    onChange={handleChange}
                    className='contact-form-subject input'
                />
                <label htmlFor="contact-form-message" className='form-label'>Message</label>
                <textarea
                    id="contact-form-message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className='contact-form-message textarea'
                ></textarea>
                <button type="submit" className='contact-form-submit'>Send Message</button>
            </form>
            </div>
        </div>
    );
}

