'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function WritingTaskTwoAssessment() {
    const [submissionContent, setSubmissionContent] = useState('Hello world');
    return (
        <div className="m-4 flex flex-row">
            <div className="flex flex-col gap-4 w-[70%]">
                <div className="font-bold text-gray-900">
                    If a product is good or it meets people's needs, people will buy it. So
                    advertising is unnecessary and no more than entertainment. To what extent do you
                    agree or disagree?
                </div>
                <div className="text-sm opacity-80">
                    Submitted by Duc HoangMinh at 2021-09-01 12:00:00
                </div>
                <Textarea
                    className="min-h-[300px]"
                    value={submissionContent}
                    onChange={(e) => setSubmissionContent(e.target.value)}
                />
                <div className="flex flex-col">
                    <div className="font-bold">Overall Result</div>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div>
                            <div className="font-bold">Excellent work!</div>
                            <div className="text-sm max-w-[480px]">
                                You are doing fantastic. Keep up the dedication to your learning
                            </div>
                        </div>
                        <div className="text-3xl font-bold">8</div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="font-bold">Task Achievement</div>
                                    <div className="mr-2 px-2 rounded-md bg-green-300">8/9</div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <div>Number of Words</div>
                                        <div className="font-bold">370</div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Relevance to Question</div>
                                        <div className="font-bold">100%</div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">Idea</div>
                                    <div className="flex flex-row justify-between">
                                        <div>Relevance to Topic</div>
                                        <div className="font-bold">100%</div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Clarity of Ideas</div>
                                        <div className="font-bold">95%</div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Repetition of Ideas</div>
                                        <div className="font-bold">90%</div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">
                                        Completion of task
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Address all parts of the question</div>
                                        <div className="font-bold">100%</div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Introduction</div>
                                        <div className="font-bold">95%</div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Conclusion</div>
                                        <div className="font-bold">90%</div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div
                className="w-[30%] border-l-2 ml-2 pl-2"
                style={{ height: 'calc(100dvh - 120px)' }}
            >
                <div className="font-bold mb-2">Feedback</div>
                <ScrollArea className="h-full w-[full] pr-4">
                    <div className="flex flex-col gap-2">
                        <WritingTaskTwoFeedbackItem />
                        <WritingTaskTwoFeedbackItem />
                        <WritingTaskTwoFeedbackItem />
                        <WritingTaskTwoFeedbackItem />
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}

const WritingTaskTwoFeedbackItem = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="rounded-md border p-2 hover:border-secondary">
            <div className="flex flex-row justify-between items-center">
                <div className="font-bold flex flex-row gap-2">
                    <div>This is a example</div>
                    <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    <div>This is a edit example</div>
                </div>
                <div className="px-2 rounded-md bg-red-50 text-red-500 text-xs">Error</div>
            </div>
            {isExpanded && (
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </div>
            )}
        </div>
    );
};

export default WritingTaskTwoAssessment;
