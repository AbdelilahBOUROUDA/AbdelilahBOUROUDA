import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const { t } = useTranslation();

  const upcomingTopics = t('blog.topics', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {t('blog.comingSoon')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm currently working on creating valuable content about digital infrastructure, 
                best practices, and real-world solutions. Stay tuned for in-depth technical articles 
                and tutorials.
              </p>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Topics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Topics</h2>
            <p className="text-muted-foreground">
              Here's what I'm planning to write about
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(upcomingTopics) && upcomingTopics.map((topic, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {topic}
                      </CardTitle>
                      <Badge variant="secondary" className="ml-2">
                        Coming Soon
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {index === 0 && "Learn how to design scalable and maintainable infrastructure architectures that can grow with your business needs."}
                        {index === 1 && "Discover the best practices for implementing virtualization solutions in enterprise environments."}
                        {index === 2 && "Understand the core principles of network security and how to implement them effectively."}
                        {index === 3 && "Explore modern monitoring tools and strategies to maintain optimal system performance."}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>~10 min read</span>
                        </div>
                        <div className="flex items-center space-x-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Get notified when new articles are published. No spam, just quality content 
                  about digital infrastructure and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button>
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  You can unsubscribe at any time. Privacy policy applies.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;

