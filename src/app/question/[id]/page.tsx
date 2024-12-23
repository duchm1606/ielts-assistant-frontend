'use client';
import React, { useState } from 'react';
import ResizableLayout from '@/components/question/resizable-layout';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { FileText, Edit, Send, History } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ClipboardList, BookOpen, Pencil, MessageSquare } from 'lucide-react';

export default function WritingQuestionPage() {
    const leftContent = () => {
        return (
            <div className="">
                <h2 className="pl-4 h-10 flex gap-2 items-center bg-secondary-300">
                    <div className="flex items-center gap-2 text-sm">
                        <FileText className="stroke-slate-500 -mr-1 h-4 w-4" />
                        Description
                    </div>
                    <Separator orientation="vertical" className=" h-4 bg-secondary-50" />
                    <div className="flex items-center gap-2 text-sm">
                        <History className="stroke-slate-500 -mr-1 h-4 w-4" />
                        Submissions
                    </div>
                </h2>
                <div style={{ height: 'calc(100dvh - 120px)' }} className="p-4 overflow-auto">
                    <h1 className="text-2xl font-bold mb-4">Daily Writing Task 1 #123</h1>
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="px-2 py-1 text-xs font-semibol bg-secondary-50 rounded-md">
                            Task 1
                        </div>
                        <div className="px-2 py-1 text-xs font-semibol bg-secondary-50 rounded-md">
                            Mixed
                        </div>
                    </div>
                    <p className="mb-4">
                        This is the left side of the resizable layout. You can use the button in the
                        top-right corner to toggle the right content visibility.
                    </p>
                </div>
            </div>
        );
    };

    const rightContent = () => {
        const [tabs, setTabs] = useState([
            { id: 'editorial', label: 'Editorial', icon: Edit },
            { id: 'submissions', label: 'Submissions', icon: Send },
        ]);
        const [activeTab, setActiveTab] = useState(tabs[0].id);
        const removeTab = (tabId: string) => {
            const newTabs = tabs.filter((tab) => tab.id !== tabId);
            setTabs(newTabs);
            if (activeTab === tabId && newTabs.length > 0) {
                setActiveTab(newTabs[0].id);
            }
        };

        const getTabsContent = () => {
            interface Category {
                name: string;
                score: number;
                description: string;
                icon: React.ReactNode;
                bgColor: string;
                iconColor: string;
            }

            const categories: Category[] = [
                {
                    name: 'Task Achievement',
                    score: 7,
                    description:
                        'Addresses all parts of the task with a fully developed position, presents relevant ideas.',
                    icon: <ClipboardList className="w-4 h-4" />,
                    bgColor: 'bg-red-50',
                    iconColor: 'text-red-500',
                },
                {
                    name: 'Coherence and Cohesion',
                    score: 8,
                    description:
                        'Sequences information logically, manages cohesion well, uses appropriate paragraphing.',
                    icon: <BookOpen className="w-4 h-4" />,
                    bgColor: 'bg-yellow-50',
                    iconColor: 'text-yellow-500',
                },
                {
                    name: 'Lexical Resource',
                    score: 7,
                    description:
                        'Uses sufficient vocabulary range with flexibility and precision, shows style awareness.',
                    icon: <Pencil className="w-4 h-4" />,
                    bgColor: 'bg-cyan-50',
                    iconColor: 'text-cyan-500',
                },
                {
                    name: 'Grammatical Range',
                    score: 6,
                    description:
                        'Uses mixed sentence forms, makes some errors but rarely reduces communication.',
                    icon: <MessageSquare className="w-4 h-4" />,
                    bgColor: 'bg-violet-50',
                    iconColor: 'text-violet-500',
                },
            ];
            switch (activeTab) {
                case 'editorial':
                    return (
                        <div>
                            <Textarea
                                className="min-h-[300px]"
                                // value={submissionContent}
                                // onChange={(e) => setSubmissionContent(e.target.value)}
                            />
                        </div>
                    );
                // TODO: Devide content into components
                case 'submissions':
                    return (
                        <div className="px-5">
                            <div className="font-bold">Welldone!</div>
                            <div className="text-sm opacity-80">
                                Submitted by Duc HoangMinh at 2021-09-01 12:00:00
                            </div>
                            <div className="mt-10">
                                <Card className="w-full mx-auto">
                                    <div className="grid md:grid-cols-2">
                                        {/* Score section */}
                                        <div className="bg-violet-600 p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-white text-center flex flex-col items-center gap-6">
                                            <h2 className="text-xl font-semibold text-violet-200">
                                                Your IELTS Result
                                            </h2>

                                            <div className="bg-violet-700 w-40 h-40 rounded-full flex flex-col items-center justify-center">
                                                <span className="text-6xl font-bold">8</span>
                                                <span className="text-violet-300 text-sm">
                                                    Band Score
                                                </span>
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">Excellent</h3>
                                                <p className="text-violet-200 text-sm">
                                                    Your writing demonstrates strong English
                                                    language proficiency across all assessment
                                                    criteria.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Score details */}
                                        <div className="p-8 space-y-6">
                                            <h3 className="text-lg font-bold">Detailed Analysis</h3>

                                            <div className="space-y-4">
                                                {categories.map((category) => (
                                                    <div key={category.name} className="space-y-2">
                                                        <div
                                                            className={`flex items-center justify-between p-4 rounded-lg ${category.bgColor}`}
                                                        >
                                                            <div
                                                                className={`flex items-center gap-2 ${category.iconColor}`}
                                                            >
                                                                {category.icon}
                                                                <span className="font-medium">
                                                                    {category.name}
                                                                </span>
                                                            </div>
                                                            <div className="font-medium">
                                                                <span className="text-gray-900">
                                                                    {category.score.toFixed(1)}
                                                                </span>
                                                                <span className="text-gray-500">
                                                                    {' '}
                                                                    / 9
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-gray-600 px-4">
                                                            {category.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    );
            }
        };
        return (
            <div className="w-full">
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="px-2 h-10 bg-secondary-300"
                >
                    <div className="flex justify-between items-center">
                        <TabsList className="bg-transparent rounded-none h-10">
                            {tabs.map((tab, index) => (
                                <div className="flex flex-row items-center">
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="data-[state=active]:bg-secondary-500 data-[state=active]:text-white gap-2"
                                    >
                                        <tab.icon className="h-4 w-4" />
                                        {tab.label}
                                    </TabsTrigger>
                                    {index < tabs.length - 1 && (
                                        <Separator
                                            orientation="vertical"
                                            className="h-4 bg-secondary-50 mx-1"
                                        />
                                    )}
                                </div>
                            ))}
                        </TabsList>
                    </div>

                    <TabsContent className="" value={activeTab}>
                        {getTabsContent()}
                    </TabsContent>
                </Tabs>
                {/* <h2 className="pl-4 h-10 flex gap-2 items-center bg-secondary-300">
                <div className="flex items-center gap-2 text-sm">
                    <FileText className="stroke-slate-500 -mr-1 h-4 w-4" />
                    Description
                </div>
                <Separator orientation="vertical" className=" h-4 bg-secondary-50" />
                <div className="flex items-center gap-2 text-sm">
                    <History className="stroke-slate-500 -mr-1 h-4 w-4" />
                    Submissions
                </div>
            </h2> */}
            </div>
        );
    };

    return (
        <div className="mt-2 mb-2 ml-2">
            <div className="flex h-10 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">IELTS Writing</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">IELTS Writing Questions</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="mt-2 ml-5 mr-2">
                <ResizableLayout
                    leftContent={leftContent}
                    rightContent={rightContent}
                    initialLeftWidth={50}
                    minLeftWidth={20}
                    maxLeftWidth={65}
                />
            </div>
        </div>
    );
}
