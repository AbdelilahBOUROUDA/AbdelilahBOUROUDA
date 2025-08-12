import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'hybridLab',
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      key: 'proxmoxCluster',
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: null,
    },
    {
      key: 'monitoringDashboard',
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      key: 'securityAudit',
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            {t('projects.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world infrastructure solutions and implementations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            const tools = t(`projects.items.${project.key}.tools`, { returnObjects: true });
            
            return (
              <motion.div key={project.key} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.github && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {t('projects.sourceCode')}
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t('projects.liveDemo')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t(`projects.items.${project.key}.title`)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`projects.items.${project.key}.description`)}
                    </p>

                    {/* Tools/Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(tools) && tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-4">
                      {project.github && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {!project.demo && !project.github && (
                        <Button size="sm" variant="outline" className="flex-1" disabled>
                          {t('projects.viewProject')}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and exploring cutting-edge infrastructure technologies. 
                Let's discuss how I can help with your infrastructure needs.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

