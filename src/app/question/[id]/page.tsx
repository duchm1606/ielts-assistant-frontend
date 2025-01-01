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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { FileText, Edit, Send, History } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ClipboardList, BookOpen, Pencil, MessageSquare, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubmissionFeedbackDetail from '@/components/submission/SubmissionFeedbackDetail';
import { ISubmissionFeedbackDetail } from '@/type/ielts-submission';

export default function WritingQuestionPage() {
    const passage = `It is true that more and more young people are getting involved in crimes, and how to best address this critical issue is an ongoing debate. There are many ways to prevent youth crimes, one of which is better parenting skills; however, those ways need to be carried out simultaneously if they are to be effective.

On the one hand, parents are the closest people to their children and more likely to have an impact on their children's behaviour. In fact, a vast number of youth crimes nowadays are the result of inappropriate child rearing, lack of childcare and education about crime alike. Therefore, it is totally reasonable to say that improving parenting skills will promise a decrease in juvenile offences.

However, education at home alone is not enough since there are a lot of kids who are not willing to listen to their parents. And children in this day and age spend the largest amount of time at school, and therefore are more likely to be influenced by their teachers or friends. For example, in my home country Vietnam, many high school students are susceptible to negative peer pressure. This usually leads to the increasing use of alcohol or drugs, all of which are primary contributors to crimes at this age. These facts suggest that we should introduce education about the consequences one may face when committing an offence in the school curriculum as well as help children manage negative peer pressure. 

In conclusion, enhancing skills to educate children at home is a good way to curb juvenile delinquencies; but I think there is no one best way to do this as different measures need to be taken at the same time.`;
    const [text, setText] = useState('');
    const feedbackDetails: ISubmissionFeedbackDetail[] = [
        {
            target_item: 'how to best address this critical issue is an ongoing debate',
            correct_item: 'how best to address this critical issue is a subject of ongoing debate',
            feedback_type: 'can_improve',
            message:
                "While grammatically correct, the phrasing is a bit wordy. 'Subject of ongoing debate' is more concise and academic.",
        },
        {
            target_item:
                'one of which is better parenting skills; however, those ways need to be carried out simultaneously if they are to be effective.',
            correct_item:
                'one of which is improving parenting skills. However, these approaches need to be implemented concurrently for optimal effectiveness.',
            feedback_type: 'can_improve',
            message:
                "The semicolon is used incorrectly. It should be a full stop or a comma with a conjunction. 'Those ways' is vague; 'these approaches' is clearer. 'Carried out' is less formal than 'implemented,' and 'effective' can be strengthened with 'optimal effectiveness'.",
        },
        {
            target_item:
                'a vast number of youth crimes nowadays are the result of inappropriate child rearing, lack of childcare and education about crime alike.',
            correct_item:
                'a significant proportion of youth crime today stems from inadequate parenting, insufficient childcare, and a lack of education regarding the consequences of crime.',
            feedback_type: 'error',
            message:
                "'A vast number' is less precise than 'a significant proportion'. 'Nowadays' can be replaced with 'today' for conciseness. 'Inappropriate child rearing' is less formal than 'inadequate parenting'. 'Education about crime alike' is awkward; 'a lack of education regarding the consequences of crime' is clearer and more formal.",
        },
        {
            target_item:
                'it is totally reasonable to say that improving parenting skills will promise a decrease in juvenile offences.',
            correct_item:
                'it is reasonable to suggest that improved parenting skills could contribute to a reduction in juvenile offenses.',
            feedback_type: 'can_improve',
            message:
                "'Totally reasonable' is slightly informal; 'reasonable' is sufficient. 'Promise a decrease' is too strong; 'could contribute to a reduction' is more cautious and academic. 'Juvenile offences' is good, but 'offenses' is the more common spelling in academic writing.",
        },
        {
            target_item: 'there are a lot of kids who are not willing to listen to their parents.',
            correct_item: 'many children are unreceptive to parental guidance.',
            feedback_type: 'can_improve',
            message:
                "'A lot of kids' is informal. 'Unreceptive to parental guidance' is more formal and concise.",
        },
        {
            target_item:
                'And children in this day and age spend the largest amount of time at school, and therefore are more likely to be influenced by their teachers or friends.',
            correct_item:
                'Children today spend a significant amount of time in school, making them susceptible to the influences of teachers and peers.',
            feedback_type: 'can_improve',
            message:
                "'In this day and age' is redundant; 'today' is sufficient. 'The largest amount of time' can be refined to 'a significant amount of time'. The phrasing has been streamlined for better flow.",
        },
        {
            target_item:
                'For example, in my home country Vietnam, many high school students are susceptible to negative peer pressure.',
            correct_item:
                'For instance, in Vietnam, many high school students are vulnerable to negative peer pressure.',
            feedback_type: 'can_improve',
            message:
                "'For example' can be replaced with the slightly more formal 'For instance'. 'Susceptible' is already a good word, but 'vulnerable' can be used to show a wider vocabulary range.",
        },
        {
            target_item:
                'This usually leads to the increasing use of alcohol or drugs, all of which are primary contributors to crimes at this age.',
            correct_item:
                'This can lead to increased substance abuse, a key contributing factor to crime among this age group.',
            feedback_type: 'can_improve',
            message:
                "'Usually leads to' is a generalization; 'can lead to' is more cautious. 'Increasing use of alcohol or drugs' can be more concisely expressed as 'increased substance abuse'. 'All of which are primary contributors to crimes at this age' can be improved to be more concise and academic as 'a key contributing factor to crime among this age group'.",
        },
        {
            target_item:
                'These facts suggest that we should introduce education about the consequences one may face when committing an offence in the school curriculum as well as help children manage negative peer pressure.',
            correct_item:
                'These observations suggest the integration of education regarding the legal ramifications of criminal activity into the school curriculum, alongside programs designed to help students navigate negative peer influence.',
            feedback_type: 'can_improve',
            message:
                "'These facts' is a bit simplistic; 'These observations' is more appropriate. 'Education about the consequences one may face when committing an offence' is wordy; 'education regarding the legal ramifications of criminal activity' is more concise and academic. 'Help children manage negative peer pressure' can be improved to 'programs designed to help students navigate negative peer influence'.",
        },
        {
            target_item:
                'enhancing skills to educate children at home is a good way to curb juvenile delinquencies; but I think there is no one best way to do this as different measures need to be taken at the same time.',
            correct_item:
                'while enhancing parenting skills at home is a valuable approach to mitigating juvenile delinquency, a multifaceted strategy involving various concurrent measures is necessary.',
            feedback_type: 'can_improve',
            message:
                "'Enhancing skills to educate children' can be rephrased as 'enhancing parenting skills'. 'Curb juvenile delinquencies' can be improved to 'mitigating juvenile delinquency'. 'But I think there is no one best way to do this as different measures need to be taken at the same time' is a bit verbose; 'a multifaceted strategy involving various concurrent measures is necessary' is more concise and academic.",
        },
    ];
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
                    <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
                        {passage}
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
                        <div className="flex flex-col justify-between h-[85dvh]">
                            <textarea
                                className="w-full h-5/6 resize-none focus:outline-none"
                                placeholder="Start typing here..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="flex flex-row justify-between">
                                <div className="ml-2">{text.length} characters</div>
                                <Button onClick={() => setText('')}>Clear</Button>
                            </div>
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
                                                            <div className="flex flex-row items-center gap-2">
                                                                <div className="font-sm">
                                                                    <span className="text-gray-900">
                                                                        {category.score.toFixed(1)}
                                                                    </span>
                                                                </div>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <Info className="w-5 h-5" />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent side="top">
                                                                        {category.description}
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="py-4">
                                <div className="font-semibold">Submission Detail</div>
                                <SubmissionFeedbackDetail
                                    content={passage}
                                    feedbacks={feedbackDetails}
                                />
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
                                <div className="flex flex-row items-center" key={tab.id}>
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
