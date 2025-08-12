import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, User, Target, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

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
            {t('about.title')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-fit">
              <CardContent className="p-6 text-center">
                {/* Profile Photo Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-24 h-24 text-primary-foreground" />
                </div>
                
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Digital Infrastructure Specialist
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Building secure, scalable infrastructure solutions
                </p>

                {/* Download CV Button */}
                <Button className="w-full mb-6" size="lg" asChild>
                  <a href="/assets/cv-placeholder.pdf" download="Digital_Infrastructure_CV.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    {t('about.downloadCV')}
                  </a>
                </Button>

                {/* Languages */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Languages className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{t('about.languages')}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">{t('about.languagesList.english')}</div>
                    <div className="text-muted-foreground">{t('about.languagesList.french')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Biography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Biography</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.bio')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Professional Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision')}
                </p>
              </CardContent>
            </Card>

            {/* Key Strengths */}
            <Card>
              <CardHeader>
                <CardTitle>Key Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Infrastructure Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Architecting robust, scalable infrastructure solutions
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Security Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing comprehensive security measures
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Automation</h4>
                    <p className="text-sm text-muted-foreground">
                      Streamlining operations through intelligent automation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">
                      Rapid diagnosis and resolution of complex issues
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

