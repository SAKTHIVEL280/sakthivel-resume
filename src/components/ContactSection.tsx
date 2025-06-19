
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'sakthivele@example.com',
      color: 'from-blue-500 to-cyan-500',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call for immediate response',
      value: '+91 XXXXX XXXXX',
      color: 'from-green-500 to-emerald-500',
      action: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in India',
      value: 'Tamil Nadu, India',
      color: 'from-purple-500 to-pink-500',
      action: 'View Map'
    },
    {
      icon: Calendar,
      title: 'Meeting',
      description: 'Schedule a consultation',
      value: 'Book a slot',
      color: 'from-orange-500 to-red-500',
      action: 'Schedule'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-800' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: MessageCircle, label: 'Discord', href: '#', color: 'hover:text-indigo-600' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), 
                           linear-gradient(-45deg, #3b82f6 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #3b82f6 75%), 
                           linear-gradient(-45deg, transparent 75%, #3b82f6 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <ScrollRevealAnimation direction="fade" delay={0.1}>
          <div className="text-center mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-blue-500/30 text-blue-600 bg-blue-50 dark:border-blue-500/30 dark:text-blue-400 dark:bg-blue-500/10">
                <Send className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Work Together
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-slate-300">
                Ready to bring your next project to life? I'm always excited to discuss new opportunities and innovative ideas.
              </p>
            </motion.div>
          </div>
        </ScrollRevealAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Methods */}
          <ScrollRevealAnimation direction="left" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Multiple Ways to Connect
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.div
                        key={method.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="group p-6 hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-slate-800/60 backdrop-blur-lg border-slate-200/50 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/40">
                          <CardContent className="p-0 space-y-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                {method.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
                                {method.description}
                              </p>
                              <p className="text-sm font-medium text-primary">
                                {method.value}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors duration-300">
                              {method.action}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Follow & Connect
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2 }}
                        className={`w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${social.color} dark:hover:text-primary`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </ScrollRevealAnimation>

          {/* Contact Form */}
          <ScrollRevealAnimation direction="right" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 lg:p-10 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border-slate-200/50 dark:border-slate-700/50">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Send a Message
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        I'll get back to you within 24 hours
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            First Name
                          </label>
                          <Input 
                            placeholder="John" 
                            className="w-full transition-all duration-300 focus:scale-105 focus:shadow-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            Last Name
                          </label>
                          <Input 
                            placeholder="Doe" 
                            className="w-full transition-all duration-300 focus:scale-105 focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                          Email Address
                        </label>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full transition-all duration-300 focus:scale-105 focus:shadow-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                          Subject
                        </label>
                        <Input 
                          placeholder="Project Discussion" 
                          className="w-full transition-all duration-300 focus:scale-105 focus:shadow-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell me about your project or idea..." 
                          rows={5}
                          className="w-full resize-none transition-all duration-300 focus:scale-105 focus:shadow-lg"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-500 shadow-lg hover:shadow-xl group"
                        >
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollRevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
