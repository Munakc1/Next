'use client';
import { useState } from 'react';

export default function ContactForm() {
  // State for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: '', email: '', message: '' });

    let valid = true;

    // Name validation (required)
    if (!name) {
      setErrors((prev) => ({ ...prev, name: 'Name is required' }));
      valid = false;
    }

    // Email validation (required and must be in a valid format)
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email is required' }));
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      valid = false;
    }

    // Message validation (required)
    if (!message) {
      setErrors((prev) => ({ ...prev, message: 'Message is required' }));
      valid = false;
    }

    if (valid) {
      // If all fields are valid, simulate submitting the form
      console.log('Form submitted with:', { name, email, message });
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>

        {/* Name Field */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        {/* Email Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        {/* Message Field */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Your message"
          rows="4"
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Thank you, <strong>{name}</strong>. Your message has been sent!
          </p>
        )}
      </form>
    </div>
  );
}
