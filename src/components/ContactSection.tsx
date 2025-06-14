
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-8 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-medium text-xs uppercase tracking-wider">Let's Connect</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Start a Conversation
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Compact Contact Information */}
          <div className="space-y-3">
            <div className="text-center lg:text-left mb-4">
              <h3 className="text-lg font-bold text-foreground mb-1">Get In Touch</h3>
              <p className="text-xs text-muted-foreground">
                I'm always excited to discuss new opportunities.
              </p>
            </div>

            {/* Compact Contact Cards - No Icons */}
            <div className="space-y-2">
              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 backdrop-blur-sm p-3 hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground text-xs mb-1">Email</h4>
                  <a 
                    href="mailto:sakthivel.hsr06@gmail.com" 
                    className="text-xs text-muted-foreground hover:text-blue-600 transition-colors duration-200 break-all"
                  >
                    sakthivel.hsr06@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-emerald-500/20 backdrop-blur-sm p-3 hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground text-xs mb-1">Phone</h4>
                  <a 
                    href="tel:+919487292520" 
                    className="text-xs text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                  >
                    +91 9487292520
                  </a>
                </div>
              </div>

              {/* Location & Response Time in one row */}
              <div className="grid grid-cols-2 gap-2">
                <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 backdrop-blur-sm p-3 hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Location</h4>
                    <p className="text-xs text-muted-foreground">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-500/5 to-pink-500/5 border border-violet-500/20 backdrop-blur-sm p-3 hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Response</h4>
                    <p className="text-xs text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compact Contact Form */}
          <div className="relative">
            <Card className="relative overflow-hidden border-0 bg-background/60 backdrop-blur-xl shadow-xl">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
              
              <CardContent className="p-4 relative z-10">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-foreground mb-1">Send a Message</h3>
                  <p className="text-xs text-muted-foreground">I'd love to hear about your project ideas.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-3">
                  {/* Name & Email in one row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground flex items-center gap-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-2 text-xs bg-background/50 border border-border/50 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm" 
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground flex items-center gap-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="w-full p-2 text-xs bg-background/50 border border-border/50 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Subject</label>
                    <input 
                      type="text" 
                      className="w-full p-2 text-xs bg-background/50 border border-border/50 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm" 
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground flex items-center gap-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={3} 
                      className="w-full p-2 text-xs bg-background/50 border border-border/50 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm resize-none" 
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 p-2 rounded-md font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
