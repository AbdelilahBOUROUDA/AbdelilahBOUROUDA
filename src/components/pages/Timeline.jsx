import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Timeline = () => {
  const { t } = useTranslation();

  const timelineItems = [
    {
      year: '2024',
      key: '2024',
      current: true,
    },
    {
      year: '2023',
      key: '2023',
      current: false,
    },
    {
      year: '2022',
      key: '2022',
      current: false,
    },
    {
      year: '2021',
      key: '2021',
      current: false,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            {t('timeline.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in digital infrastructure
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative mb-8 md:mb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10"></div>
                
                <div className="md:ml-16">
                  <Card className={`${item.current ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="flex items-center space-x-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <span>{t(`timeline.items.${item.key}.title`)}</span>
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.year}</span>
                          </div>
                          {item.current && (
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`timeline.items.${item.key}.description`)}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="mt-4 space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Key Achievements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {item.year === '2024' && (
                            <>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Led infrastructure modernization project</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Implemented zero-downtime deployment strategies</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Reduced infrastructure costs by 30%</span>
                              </li>
                            </>
                          )}
                          {item.year === '2023' && (
                            <>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Deployed comprehensive monitoring solution</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Achieved 99.9% uptime across all systems</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Automated backup and recovery processes</span>
                              </li>
                            </>
                          )}
                          {item.year === '2022' && (
                            <>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Configured enterprise network infrastructure</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Implemented network security protocols</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Reduced network latency by 40%</span>
                              </li>
                            </>
                          )}
                          {item.year === '2021' && (
                            <>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Provided tier 2/3 technical support</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Maintained 95% customer satisfaction rating</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>Completed foundational IT certifications</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <Card className="border-dashed border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center space-x-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Future Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">2025 Objectives</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Complete CCNA certification</li>
                      <li>Lead cloud migration project</li>
                      <li>Implement Infrastructure as Code</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Long-term Vision</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Become cloud architecture specialist</li>
                      <li>Mentor junior infrastructure engineers</li>
                      <li>Contribute to open-source projects</li>
                    </ul>
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

export default Timeline;

