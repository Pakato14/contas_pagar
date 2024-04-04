import React from 'react';

function Contact() {
    const contacts = [
        { name: 'Bruna Oliveira', phone: '(85) 99620-9587', email: 'bruna.oflima@gmail.com', photo: './Bruna.jpeg', linkedin: 'https://www.linkedin.com/in/bruna-oliveira/' },
        { name: 'Daniel Oliveira', phone: '(85) 99636-6458', email: 'danieloliveira14@gmail.com', photo: './Daniel.jpeg', linkedin: 'https://www.linkedin.com/in/daniel-oliveira/' },
        { name: 'Ygila Lima', phone: '(85) 99806-6935', email: 'ygilalimadigital@gmail.com', photo: './Ygila.jpeg', linkedin: 'https://www.linkedin.com/in/ygila-lima-yellow-belt-2958a1219' }
    ];

    return (
        <div>
            <h1>Contacts</h1>
            <div style={{ display: 'flex' }}>
                {contacts.map(contact => (
                    <div key={contact.name} style={{ margin: '10px', textAlign: 'center' }}>
                        <img src={contact.photo} alt={contact.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                        <div>
                            <h2>{contact.name}</h2>
                            <p>Phone: {contact.phone}</p>
                            <p>Email: {contact.email}</p>
                            <p><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;



