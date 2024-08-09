import React from 'react';
import { CgProfile } from "react-icons/cg";
import blogPic1 from '../assets/blog_pic_1.png';
import startupRoadmap from '../assets/blog_pic_2.png';
import technologySkills from '../assets/blog_pic_3.png';
import productivityTools from '../assets/blog_pic_4.png';
import skillEnhancement from '../assets/blog_pic_5.png';
import resourceManagement from '../assets/blog_pic_6.png';
import careerDevelopment from '../assets/blog_pic_7.png';
import lifestyleRoadmap from '../assets/blog_pic_8.png';
import businessGrowth from '../assets/blog_pic_9.png';
import exceptionalLifestyle from '../assets/blog_pic_10.png';
import startupSuccess from '../assets/blog_pic_11.png';
import onlineLearning from '../assets/blog_pic_12.png';
import aiAlgorithms from '../assets/blog_pic_13.png';
import balanceBliss from '../assets/blog_pic_14.png';
import socialNetworking from '../assets/blog_pic_15.png';
import startupEcosystem from '../assets/blog_pic_16.png';
import sportsDevelopments from '../assets/blog_pic_17.jpg';
import chelseaUpdates from '../assets/blog_pic_18.jpg';

export const blog_data = [
    {
        id: 1,
        title: "Mastering Lifestyle Management: A Comprehensive Guide",
        description: "Discover actionable strategies to improve your daily routines and achieve a balanced lifestyle. This guide covers effective time management techniques, wellness practices, and tips for setting and achieving personal goals.",
        date: "2024-07-01",
        category: "Lifestyle",
        author: "Jordan Lee",
        author_img: <CgProfile />,
        image: blogPic1
    },
    {
        id: 2,
        title: "Crafting a Winning Startup Roadmap: Essential Tips",
        description: "Learn how to create a roadmap that sets your startup up for success. This article offers insights into goal setting, milestone planning, and practical steps to navigate the startup journey effectively.",
        date: "2024-07-01",
        category: "Startup",
        author: "Morgan Taylor",
        author_img: <CgProfile />,
        image: startupRoadmap
    },
    {
        id: 3,
        title: "Boost Your Career with Cutting-Edge Technology Skills",
        description: "Enhance your career prospects by mastering the latest technologies. We cover key skills in demand, how to acquire them, and strategies to stay ahead in the rapidly evolving tech landscape.",
        date: "2024-07-01",
        category: "Technology",
        author: "Alex Johnson",
        author_img: <CgProfile />,
        image: technologySkills
    },
    {
        id: 4,
        title: "Maximize Productivity with Effective Software Tools",
        description: "Unlock the full potential of apps and software to streamline your workflow. This article reviews top productivity tools and provides tips on how to integrate them into your daily routine for maximum efficiency.",
        date: Date.now(),
        category: "Technology",
        author: "Taylor Smith",
        author_img: <CgProfile />,
        image: productivityTools
    },
    {
        id: 5,
        title: "Skill Enhancement and Capturing Memorable Moments",
        description: "Explore methods for improving your personal skills while documenting important moments in life. This guide offers practical advice on skill development and creative ways to preserve memories.",
        date: Date.now(),
        category: "Lifestyle",
        author: "Jamie Clark",
        author_img: <CgProfile />,
        image: skillEnhancement
    },
    {
        id: 6,
        title: "Efficient Resource Management for Startup Success",
        description: "Learn how to manage resources effectively to boost your startup’s performance. This article provides insights into resource allocation, cost-saving strategies, and optimizing operations.",
        date: Date.now(),
        category: "Startup",
        author: "Riley Davis",
        author_img: <CgProfile />,
        image: resourceManagement
    },
    {
        id: 7,
        title: "Advancing Your Career in Development with Technology",
        description: "Stay ahead in your development career by leveraging emerging technologies. Discover the latest trends, tools, and technologies that can help you advance and achieve your career goals.",
        date: Date.now(),
        category: "Technology",
        author: "Casey Wilson",
        author_img: <CgProfile />,
        image: careerDevelopment
    },
    {
        id: 8,
        title: "Creating a Roadmap for Effective Lifestyle Management",
        description: "Develop a comprehensive plan to manage your lifestyle more effectively. This guide includes strategies for setting goals, tracking progress, and making adjustments to improve overall well-being.",
        date: Date.now(),
        category: "Lifestyle",
        author: "Alex Morgan",
        author_img: <CgProfile />,
        image: lifestyleRoadmap
    },
    {
        id: 9,
        title: "Achieving Business Growth with Minimal Resources",
        description: "Explore techniques for growing your business while minimizing resource usage. This article offers strategies for maximizing returns, optimizing processes, and achieving sustainable growth.",
        date: Date.now(),
        category: "Startup",
        author: "Drew Taylor",
        author_img: <CgProfile />,
        image: businessGrowth
    },
    {
        id: 10,
        title: "Crafting an Exceptional Lifestyle: Beyond the Ordinary",
        description: "Transform your lifestyle with unique and exceptional practices. This guide provides innovative ideas and inspiration to help you create a distinctive and fulfilling lifestyle.",
        date: Date.now(),
        category: "Lifestyle",
        author: "Jordan Lee",
        author_img: <CgProfile />,
        image: exceptionalLifestyle
    },
    {
        id: 11,
        title: "Secrets to Startup Success in the Technology Sector",
        description: "Uncover the key factors that contribute to successful startups in technology. Learn from industry experts about best practices, common pitfalls, and strategies for achieving startup success.",
        date: Date.now(),
        category: "Startup",
        author: "Taylor Smith",
        author_img: <CgProfile />,
        image: startupSuccess
    },
    {
        id: 12,
        title: "Designing an Effective Online Learning Platform",
        description: "Learn how to create an online learning platform that meets the needs of users. This article covers design principles, user experience considerations, and technical aspects of building a successful e-learning platform.",
        date: Date.now(),
        category: "Technology",
        author: "Casey Wilson",
        author_img: <CgProfile />,
        image: onlineLearning
    },
    {
        id: 13,
        title: "The Future of AI Algorithms: What to Expect",
        description: "Explore the emerging trends and developments in AI algorithms. This article provides insights into how AI is evolving and what the future holds for this transformative technology.",
        date: Date.now(),
        category: "Startup",
        author: "Riley Davis",
        author_img: <CgProfile />,
        image: aiAlgorithms
    },
    {
        id: 14,
        title: "Navigating Life's Journey: Balance and Bliss",
        description: "Find harmony in your life with strategies for achieving balance and bliss. This guide offers practical advice on managing life’s challenges and finding joy in everyday experiences.",
        date: Date.now(),
        category: "Lifestyle",
        author: "Jamie Clark",
        author_img: <CgProfile />,
        image: balanceBliss
    },
    {
        id: 15,
        title: "The Evolution of Social Networking: What’s Next",
        description: "Examine the evolution of social networking and explore future trends. This article discusses the changes in social media and what to expect in the coming years.",
        date: Date.now(),
        category: "Technology",
        author: "Alex Morgan",
        author_img: <CgProfile />,
        image: socialNetworking
    },
    {
        id: 16,
        title: "The Future of the Startup Ecosystem Globally",
        description: "Get insights into the future of the global startup ecosystem. This article covers emerging trends, opportunities, and challenges facing startups worldwide.",
        date: Date.now(),
        category: "Startup",
        author: "Drew Taylor",
        author_img: <CgProfile />,
        image: startupEcosystem
    },
    {
        id: 17,
        title: "Exciting Developments in the Sports World",
        description: "Stay updated with the latest and most exciting developments in the sports world. This article covers major events, trends, and news that are making waves in sports.",
        date: Date.now(),
        category: "Sports",
        author: "David",
        author_img: <CgProfile />,
        image: sportsDevelopments
    },
    {
        id: 18,
        title: "Latest Updates from Chelsea FC",
        description: "Catch up on the latest news and updates from Chelsea FC. This article provides insights into recent matches, player performances, and club activities.",
        date: Date.now(),
        category: "Sports",
        author: "Chelsea News Team",
        author_img: <CgProfile />,
        image: chelseaUpdates
    }
];
