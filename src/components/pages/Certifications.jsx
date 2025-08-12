import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      key: 'ccnaIntro',
      status: 'completed',
      year: '2025',
      issuer: 'Cisco',
      logo: '🔗',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      key: 'ccnaSwitching',
      status: 'completed',
      year: '2025',
      issuer: 'Cisco',
      logo: '🔗',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      key: 'ccnaEnterprise',
      status: 'completed',
      year: '2025',
      issuer: 'Cisco',
      logo: '🔗',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      key: 'ethicalHacker',
      status: 'completed',
      year: '2025',
      issuer: 'EC-Council',
      logo: '🛡️',
      color: 'bg-red-500/10 text-red-400',
    },
    {
      key: 'networkingBasics',
      status: 'completed',
      year: '2025',
      issuer: 'Cisco',
      logo: '🌐',
      color: 'bg-green-500/10 text-green-400',
    },
    {
      key: 'pythonEssentials',
      status: 'completed',
      year: '2025',
      issuer: 'Python Institute',
      logo: '🐍',
      color: 'bg-yellow-500/10 text-yellow-400',
    },
    {
      key: 'computerHardware',
      status: 'completed',
      year: '2025',
      issuer: 'CompTIA',
      logo: '💻',
      color: 'bg-purple-500/10 text-purple-400',
    },
    {
      key: 'cybersecurityIntro',
      status: 'completed',
      year: '2025',
      issuer: 'Cisco',
      logo: '🔒',
      color: 'bg-orange-500/10 text-orange-400',
    },
    {
      key: 'aiIntro',
      status: 'completed',
      year: '2025',
      issuer: 'Intel',
      logo: '🤖',
      color: 'bg-indigo-500/10 text-indigo-400',
    },
  ];

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
            {t('certifications.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.key} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${cert.color} flex items-center justify-center text-2xl mb-4`}>
                    {cert.logo}
                  </div>
                  <CardTitle className="text-lg mb-2">
                    {t(`certifications.items.${cert.key}.name`)}
                  </CardTitle>
                  <div className="flex justify-center space-x-2 mb-3">
                    <Badge variant={cert.status === 'completed' ? 'default' : 'secondary'}>
                      {cert.status === 'completed' ? 'Certified' : 'In Progress'}
                    </Badge>
                    <Badge variant="outline">
                      {t(`certifications.items.${cert.key}.date`)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Issued by {cert.issuer}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-left">
                    {t(`certifications.items.${cert.key}.description`)}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span>Continuous Learning Path</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Current Focus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Advanced Network Security</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Cloud Infrastructure Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>DevOps and Automation</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Planned Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>CompTIA Security+</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Microsoft Azure Administrator</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>AWS Solutions Architect</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">9</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Certifications Earned
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Training Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Latest Achievement
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;

