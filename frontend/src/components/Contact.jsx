import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function   Contact() {
  const { email, location, github, linkedin } = profileData.personal;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear error on change
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Please type a message.';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
   const data =  await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/profile/send-email', { ...formData });
   if(data.status === 200){
    //give toast success
    setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Your message has been sent successfully!');
      return;
   }
   //give toast error if not 200
  else {
    setIsSubmitting(false);
    toast.error('An error occurred while sending your message. Please try again later.');
  }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-zinc-950/30 light-theme:bg-zinc-50/50 border-t border-b border-zinc-900 light-theme:border-zinc-200">
      
      {/* Decorative Radial */}
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Get in <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            Have an open software development opportunity, research proposal, or just want to discuss full-stack optimization? Reach out below!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 1: Email */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm flex items-start gap-4 hover:border-violet-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 light-theme:text-violet-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">Email Address</h4>
                <a href={`mailto:${email}`} className="text-base font-bold text-white light-theme:text-zinc-800 hover:text-violet-400 light-theme:hover:text-violet-600 transition-colors">
                  {email}
                </a>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm flex items-start gap-4 hover:border-indigo-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 light-theme:text-indigo-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">Location</h4>
                <p className="text-base font-bold text-white light-theme:text-zinc-800">
                  {location}
                </p>
              </div>
            </div>

            {/* Card 3: Social Hub */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm text-left flex-grow">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Connect Socially</h4>
              <div className="flex gap-4">
                
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/50 light-theme:bg-zinc-100 hover:bg-zinc-900 light-theme:hover:bg-zinc-200 border border-zinc-800 light-theme:border-zinc-300 text-zinc-300 light-theme:text-zinc-700 font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/50 light-theme:bg-zinc-100 hover:bg-zinc-900 light-theme:hover:bg-zinc-200 border border-zinc-800 light-theme:border-zinc-300 text-zinc-300 light-theme:text-zinc-700 font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm text-left h-full">
              
              <h3 className="text-lg font-bold text-white light-theme:text-zinc-900 mb-6 font-heading border-b border-zinc-900 light-theme:border-zinc-200 pb-3">
                Send a Message
              </h3>

              {submitSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl flex items-start gap-3.5 mb-6 animate-fade-in-up">
                  <div className="p-1 rounded-full bg-emerald-500 text-white mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Message Delivered Successfully!</h4>
                    <p className="text-xs text-emerald-500/80 mt-0.5">Thank you for writing. I will get back to you shortly.</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">   
                <div className="grid md:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 light-theme:text-zinc-500">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 light-theme:bg-zinc-50 border text-white light-theme:text-zinc-900 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors ${
                        formErrors.name ? 'border-red-500' : 'border-zinc-850 light-theme:border-zinc-300'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-500 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 light-theme:text-zinc-500">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 light-theme:bg-zinc-50 border text-white light-theme:text-zinc-900 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors ${
                        formErrors.email ? 'border-red-500' : 'border-zinc-850 light-theme:border-zinc-300'
                      }`}
                      placeholder="jane@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-500 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 light-theme:text-zinc-500">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 light-theme:bg-zinc-50 border border-zinc-850 light-theme:border-zinc-300 text-white light-theme:text-zinc-900 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                    placeholder="Project Inquiry / Opportunity"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 light-theme:text-zinc-500">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 light-theme:bg-zinc-50 border text-white light-theme:text-zinc-900 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-zinc-850 light-theme:border-zinc-300'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-500 font-medium">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold shadow-md shadow-violet-950/20 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
