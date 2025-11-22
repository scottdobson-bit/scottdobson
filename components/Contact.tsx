
import React from 'react';
import SectionTitle from './SectionTitle';
import { Instagram, Twitter, Youtube, Music, Globe, Mail, Facebook, MessageCircle, MessageSquare, Smartphone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'instagram': return <Instagram className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'youtube': return <Youtube className="h-5 w-5" />;
      case 'spotify': return <Music className="h-5 w-5" />;
      case 'applemusic': return <Music className="h-5 w-5" />;
      case 'globe': return <Globe className="h-5 w-5" />;
      case 'mail': return <Mail className="h-5 w-5" />;
      case 'facebook': return <Facebook className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  const MESSAGING_LINKS = [
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/447740282182', 
      icon: <MessageCircle className="h-6 w-6" />,
      color: 'text-green-500'
    },
    { 
      name: 'Messenger', 
      url: 'https://m.me/scottdobson', 
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'text-blue-500'
    },
    { 
      name: 'iMessage', 
      url: 'sms:scott@cobellon.co.uk', 
      icon: <Smartphone className="h-6 w-6" />,
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Me" subtitle="Booking & Inquiries" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you're looking for live performance booking, custom composition for film/media, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-lg border border-slate-800">
              <h4 className="text-amber-500 font-bold uppercase tracking-wide mb-6">Social Profiles</h4>
              <div className="grid grid-cols-2 gap-4">
                 {SOCIAL_LINKS.map((link) => (
                   <a 
                    key={link.platform} 
                    href={link.url} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded group"
                   >
                     <span className="group-hover:text-amber-500 transition-colors">
                       {getIcon(link.iconName)}
                     </span>
                     <span className="uppercase text-sm font-medium">{link.platform}</span>
                   </a>
                 ))}
              </div>
            </div>

            <div className="text-slate-500 text-sm">
              <p>Management: mgmt@scottdobson.com</p>
              <p>Press: press@scottdobson.com</p>
            </div>
          </div>

          {/* Right Column: Direct Messaging (Replaces Form) */}
          <div className="bg-slate-950 p-8 md:p-10 rounded-xl shadow-2xl border border-slate-800">
              <h4 className="text-amber-500 font-bold uppercase tracking-wide mb-6 text-xl">Direct Messaging</h4>
              <p className="text-slate-400 mb-8">
                For the quickest response, message me directly on your preferred platform.
              </p>
              <div className="flex flex-col gap-4">
                 {MESSAGING_LINKS.map((link) => (
                   <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 text-slate-300 hover:text-white transition-all p-5 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-800/50 hover:border-slate-700 group`}
                   >
                     <span className={`transition-colors p-2 rounded-full bg-slate-950 ${link.color}`}>
                       {link.icon}
                     </span>
                     <span className="font-medium text-lg">{link.name}</span>
                     <span className="text-slate-600 text-xs uppercase ml-auto group-hover:text-slate-400 font-bold tracking-wider">Chat Now</span>
                   </a>
                 ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
