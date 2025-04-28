'use client';
import { useState } from 'react';

export default function ContactForm() {
  // State to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (refresh)
    
    // Optionally, you could validate here
    if (name && email && message) {
      // Simulate sending data (you could send it to an API here)
      console.log("Form submitted with:", { name, email, message });
      
      // Show success message
      setSubmitted(true);
    } else {
      // Handle validation failure (optional)
      alert('Please fill in all fields!');
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
          required
        />

        {/* Email Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your email"
          required
        />

        {/* Message Field */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Your message"
          rows="4"
          required
        />

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
