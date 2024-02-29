const prakash = {
    introduction: {
        name: 'prakash jaiswal',
        phoneNumber: '+91-6361038126',
        emailAddress: 'prakashjaiswal625@gmail.com',
        linkedin: 'https://www.linkedin.com/in/prakash-jaiswal-64978b1b1/',
        github: 'https://github.com/jaiswalPrakash',
    },
    aboutMe: `Experienced Node.js Backend Engineer specializing in MEAN stack development,with nearly three years of hands-on experience.Proven track record of delivering scalable solutions and collaborating effectively across teams.Thrives in dynamic environments and excels in tackling complex challenges with innovative problem-solving skills.Eager to bring expertise and dedication to a forward-thinking team.Let's connect and discuss how I can contribute to your organization's success!`,
    skillSummary: ['javascript', 'nodejs', 'Express js', 'serverless', 'angular', 'nestjs', 'mongoDB', 'mooongoes', 'MYSQL'],
    'workExperience': [
        {
            companyName: 'JUST DIAL LIMITED .',
            companyUrl: 'https://www.justdial.com/',
            title: 'Software Engineer',
            from: '18-july-2022',
            isPresent: false,
            till: '26-feb-2024',
            'Roles and Responsibilities': [
                'Led integration of e-commerce Trackers, enhancing project efficiency.',
                'Utilized Kafka for scalable message queuing for high-volume requests.',
                'Optimized API performance using advanced JavaScript and Node.js techniques.',
                'Implemented ESLint in Node.js projects to ensure code quality standards.',
                'worked on search analytics angular project to create tracking and visualizations of insightful dashboard.',
                'Developed dashboards with Angular and Node.js for monitoring to customer support ticket status and agent productivity.'
            ],
            projects: [
                {
                    name: 'Market Place (B2C)',
                    url: 'https://www.justdial.com/shop-online',
                    teamSize: '5-10',
                    description: 'E-commerce platform to sell and buy product directly to  customer from business. with same day delivery facility.'
                },
                {
                    name: 'Search Analytics',
                    url: '',
                    teamSize: '3-5',
                    description: `The Business Analytics and Growth Performance Report project aim to analyze and present a comprehensive overview of a business's growth and performance metrics.This project leverages data analytics tools and methodologies to provide valuable insights that can inform strategic decision-making and contribute to the overall success of the organization.`
                }
            ]
        },
        {
            companyName: 'ExpansionJS Technologies Private Limited.',
            companyUrl: 'https://www.expansionjs.com/',
            title: 'Software Engineer',
            from: '05-april-2021',
            isPresent: false,
            till: '30-april-2022',
            'Roles and Responsibilities': [
                "Developed APIs for inventory management and automated PDF contract generation with ( NPM puppeteer ) , improving operational efficiency.",
                "Implemented JWT for robust role-based authentication and authorization, enhancing platform security.",
                "Created a module for image upload to AWS S3 with functionality for URL storage and image deletion, facilitating better content management.",
                "Integrated Chargebee for subscription management, contributing to application functionality and scalability."
            ],
            projects: [
                {
                    name: 'Subcontractor Hub',
                    url: 'https://web.subcontractorhub.com',
                    teamSize: '5-10',
                    description: `Subcontractor Hub connects your roofing business to customers,financing, sales, contractors and projects seamlessly.We offer this through a suite of applications that allows you to customize proposals as per your organization's needs.`
                },
                {
                    name: 'Admin portal for Solar Quote ',
                    url: '',
                    teamSize: '3-5',
                    description: `Best Solar Panel Company In Riverside, CA Secure your future with Solar.Solar Quote, offer the best solar panels in Riverside, CA that fit your home and price point.`
                }
            ]
        }
    ],
    'education': [
        {
            degree: 'B.Tech',
            from: '2017',
            till: '2021',
            course: 'computer science engineering',
            'school/collage': 'Sri Venkateshwara College of Engineering.',
            'percentage/CGPA': '8.08'
        },
        {
            degree: '10+2 (12th)',
            from: '2016',
            till: '2017',
            course: 'PCM + computer',
            'school/collage': "Trinity Int'l College Kathmandu-Nepal",
            'percentage/CGPA': '68%'
        }
    ]


}

module.exports = { prakash }