'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
const WritingTaskTwoAssessmentPage = () => {
    const params = useParams();
    const [data, setData] = useState<any>();
    const [submissionContent, setSubmissionContent] = useState('');
    const getSubmissionResultDetails = async () => {
        const response = await fetch(
            `http://localhost:8000/writing-task-2/submission/${params.id}`
        );
        const data = await response.json();
        setData(data);
        setSubmissionContent(data?.answer);
    };
    useEffect(() => {
        getSubmissionResultDetails();
    }, []);

    return (
        <div className="m-4 flex flex-row">
            <div className="flex flex-col gap-4 w-[70%]">
                <div className="font-bold text-gray-900">{data?.question}</div>
                <div className="text-sm opacity-80">
                    Submitted by Duc HoangMinh at 2024-11-30 12:00:00
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
                        <div className="text-3xl font-bold">{data?.scoreDetail.overall_score}</div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="font-bold">Task Achievement</div>
                                    <div className="mr-2 px-2 rounded-md bg-green-300">
                                        {data?.scoreDetail.task_achievement_score}/9
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <div>Number of Words</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.num_of_words}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Relevance to Question</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.relevance_to_question}
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">Idea</div>
                                    <div className="flex flex-row justify-between">
                                        <div>Relevance to Topic</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.relevance_to_topic}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Clarity of Ideas</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.clarity_of_ideas}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Repetition of Ideas</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.repetition_of_ideas}%
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">
                                        Completion of task
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Address all parts of the question</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.address_all_parts_of_the_question}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Introduction</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.introduction}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Conclusion</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.conclusion}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Position of the writer</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.position_of_the_writer}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Examples supporting ideas</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.examples_supporting_ideas}%
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="font-bold">Lexical Resource</div>
                                    <div className="mr-2 px-2 rounded-md bg-green-300">
                                        {data?.scoreDetail.lexical_resource_score}/9
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <div>Spelling errors</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.spelling_errors}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Word Choice Relevance to Topic</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.word_choice_relevance_to_topic}
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">Idea</div>
                                    <div className="flex flex-row justify-between">
                                        <div>Vocabulary Diversity</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.vocabulary_diversity}%
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">
                                        Word Repetition
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Address all parts of the question</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.address_all_parts_of_the_question}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Frequency of Repeated Words</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.frequency_of_repeated_words}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Command of Words Used</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.command_of_words_used}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Collocations Used</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.collocations_used}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Formal Language</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.formal_language}%
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="font-bold">Coherence and Cohesion</div>
                                    <div className="mr-2 px-2 rounded-md bg-green-300">
                                        {data?.scoreDetail.coherence_and_cohesion_score}/9
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <div>Paragraphing</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.paragraphing}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Logical Progression</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.logical_progression}
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">Idea</div>
                                    <div className="flex flex-row justify-between">
                                        <div>Readability (Understandability)</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.readability}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Usage of Cohesive Devices</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.usage_of_cohesive_devices}%
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Adequate Referencing</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.adequate_referencing}%
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="font-bold">Grammatical Range and Accuracy</div>
                                    <div className="mr-2 px-2 rounded-md bg-green-300">
                                        {data?.scoreDetail.task_achievement_score}/9
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <div>Consistency in the Usage of Tenses</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.consistency_in_the_usage_of_tenses}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Accurate Usage of Vocabulary</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.accurate_usage_of_vocabulary}
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">
                                        Grammatical Errors
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Punctuation</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.punctuation}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Capitalization</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.capitalization}
                                        </div>
                                    </div>
                                    <div className="uppercase font-bold opacity-50 mt-2">
                                        Sentence Structure Variety
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Simple sentences</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.simple_sentences}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Complex sentences</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.complex_sentences}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Compound sentences</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.compound_sentences}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Conditional sentences</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.conditional_sentences}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>Compound-Complex sentences</div>
                                        <div className="font-bold">
                                            {data?.scoreDetail.compound_complex_sentences}
                                        </div>
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
                    <div>
                        {data?.feedback.map((feedback: any, index: number) => (
                            <div
                                className="flex flex-col gap-2 py-1"
                                key={`feedback-item-${index}`}
                            >
                                <WritingTaskTwoFeedbackItem data={feedback} />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

const WritingTaskTwoFeedbackItem = ({ data }: { data: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const FEEDBACK_TYPE_MAPPING = {
        can_improve: {
            content: 'Can Improve',
            badge_color: 'bg-amber-50 text-amber-500',
        },
        error: {
            content: 'Error',
            badge_color: 'bg-red-50 text-red-500',
        },
    } as any;
    return (
        <div className="rounded-md border p-2 hover:border-secondary">
            <Accordion type="single" collapsible asChild>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start gap-2">
                            <div className="text-sm">
                                {data.target_word}
                                {' -> '}
                                {data.correct_word}
                            </div>
                            <div
                                className={`px-2 rounded-md bg-red-5 text-xs ${
                                    FEEDBACK_TYPE_MAPPING[data.feedback_type].badge_color
                                }`}
                            >
                                {FEEDBACK_TYPE_MAPPING[data.feedback_type].content}
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div>{data.message}</div>
                    </AccordionContent>
                    {/* {isExpanded && (
                        
                    )} */}
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default WritingTaskTwoAssessmentPage;
