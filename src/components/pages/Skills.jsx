import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Monitor,
  Database,
  Terminal,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: 'infrastructure',
      icon: Server,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      key: 'networking',
      icon: Network,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      key: 'monitoring',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      key: 'cloud',
      icon: Cloud,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
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
            {t('skills.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern infrastructure technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const skills = t(`skills.categories.${category.key}.skills`, { returnObjects: true });
            
            return (
              <motion.div key={category.key} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.bgColor}`}>
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <span>{t(`skills.categories.${category.key}.title`)}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.isArray(skills) && skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {85 + (index * 3) % 15}%
                            </span>
                          </div>
                          <Progress 
                            value={85 + (index * 3) % 15} 
                            className="h-2"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Technical Proficiency Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Server className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">Virtualization</h3>
                  <p className="text-sm text-muted-foreground">Expert Level</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Network className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">Networking</h3>
                  <p className="text-sm text-muted-foreground">Advanced</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Monitor className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Expert Level</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Terminal className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">Automation</h3>
                  <p className="text-sm text-muted-foreground">Intermediate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

