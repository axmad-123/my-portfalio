import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground">axmadcade389@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground">+252 617 12 74 93</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">Moqdisho, somalia</div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Usually responds within 24 hours
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Available for freelance work
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background/50 border-border/30 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background/50 border-border/30 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50 border-border/30 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input 
                  placeholder="Let's work together"
                  className="bg-background/50 border-border/30 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border/30 focus:border-primary/50 resize-none"
                />
              </div>

              <Button className="w-full hero-button">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you as soon as possible. Thank you!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 