import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vaibhavcoreai'},
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vaibhav-manaji' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/vaibhav.wav' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/919561790659' },
  ];

  return (
    <section id='contact' className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase mb-12 text-neutral-600">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-3xl md:text-4xl leading-relaxed mb-8 cursor-hover">
                Let's solve complex problems with data-driven solutions.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase mb-4 text-neutral-600">
                  Email
                </h3>
                <a 
                  href="mailto:vaibhavmanaji43@gmail.com"
                  className="text-xl hover:translate-x-2 inline-block transition-transform duration-300"
                >
                  vaibhavmanaji43@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase mb-4 text-neutral-600">
                  Social
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-lg hover:translate-x-2 transition-transform duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Icon className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors duration-300" />
                        <span>{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-20 pt-8 border-t border-neutral-300 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>© 2026 Vaibhav Manaji</p>
            <p>India</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}