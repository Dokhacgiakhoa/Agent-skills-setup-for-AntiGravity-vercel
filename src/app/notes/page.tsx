"use client";

import { Metadata } from "next";
import { Mail, Github, MessageCircle, BookOpen, FileText, ExternalLink, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotesPage() {
  const { t } = useLanguage();

  const contactChannels = [
    {
      icon: Github,
      title: t('notes.github'),
      description: t('notes.githubDesc'),
      href: "https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity/issues",
      color: "#FCD34D",
      action: t('notes.githubAction')
    },
    {
      icon: Mail,
      title: t('notes.email'),
      description: t('notes.emailDesc'),
      href: "mailto:dokhacgiakhoa666@gmail.com",
      color: "#EA4335",
      action: t('notes.emailAction')
    },
    {
      icon: MessageCircle,
      title: t('notes.messenger'),
      description: t('notes.messengerDesc'),
      href: "https://www.facebook.com/dokhacgiakhoa",
      color: "#0084FF",
      action: t('notes.messengerAction')
    }
  ];

  const quickLinks = [
    {
      icon: BookOpen,
      title: t('notes.sampleProject'),
      description: t('notes.sampleDesc'),
      href: "/samples",
      color: "#34A853"
    },
    {
      icon: FileText,
      title: t('notes.termTitle'),
      description: t('notes.termDesc'),
      href: "/dictionaries",
      color: "#FBBC04"
    }
  ];

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Custom Video Background - Lighter overlay for visibility */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Solid background */}
        <div className="absolute inset-0 bg-[#05070a]" />
        
        {/* YouTube Video */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <iframe
            className="w-full h-full min-w-[100vw] min-h-[56.25vw] opacity-60 grayscale-[10%] pointer-events-none mix-blend-screen"
            src="https://www.youtube.com/embed/HIvqw74pCFc?autoplay=1&mute=1&controls=0&loop=1&playlist=HIvqw74pCFc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&autohide=1"
            allow="autoplay; encrypted-media"
            title="Background Video"
            style={{ 
              pointerEvents: 'none',
              aspectRatio: '16 / 9',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Lighter overlay - from 90% to 70% for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0EA5E9]/5 to-black/80" />
        
        {/* Subtle dot texture */}
        <div className="absolute inset-0 bg-[url('/grid-texture.png')] opacity-5" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5E9]/10 rounded-full border border-[#0EA5E9]/30 mb-6">
            <AlertCircle className="h-4 w-4 text-[#0EA5E9]" />
            <span className="text-[#0EA5E9] text-sm font-bold uppercase">{t('notes.title')}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            {t('notes.connectTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#34A853]">{t('notes.connectHighlight')}</span>
          </h1>
          
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('notes.connectDesc')}
          </p>
        </div>

        {/* Contact Channels */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            {t('notes.channelTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactChannels.map((channel, index) => (
              <Link
                key={index}
                href={channel.href}
                target="_blank"
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${channel.color}40, transparent)` }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-white/10 to-white/5"
                    style={{ boxShadow: `0 0 20px ${channel.color}40` }}
                  >
                    <channel.icon className="h-8 w-8" style={{ color: channel.color }} />
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-2">{channel.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{channel.description}</p>
                  
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                    <span className="text-sm font-bold" style={{ color: channel.color }}>{channel.action}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            {t('notes.resourceTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${link.color}40, transparent)` }}
                />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-white/10 to-white/5"
                    style={{ boxShadow: `0 0 20px ${link.color}40` }}
                  >
                    <link.icon className="h-7 w-7" style={{ color: link.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-2">{link.title}</h3>
                    <p className="text-white/60 text-sm">{link.description}</p>
                  </div>
                  
                  <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            💡 <strong>{t('notes.tip')}</strong> {t('notes.tipContent')}
          </p>
        </div>
      </div>
    </main>
  );
}
