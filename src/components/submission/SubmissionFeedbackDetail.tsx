'use client';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ISubmissionFeedbackDetail } from '@/type/ielts-submission';
import { Card } from '../ui/card';

interface Props {
    content: string;
    feedbacks: ISubmissionFeedbackDetail[];
}

const FEEDBACK_TYPE_MAPPING = {
    can_improve: {
        content: 'Can Improve',
        badge_color: 'bg-amber-50 text-amber-500',
        text_color: 'bg-amber-100',
    },
    error: {
        content: 'Error',
        badge_color: 'bg-red-50 text-red-500',
        text_color: 'bg-red-100',
    },
} as any;

const SubmisisonFeedbackDetailCardItem = ({
    highlightDetail,
}: {
    highlightDetail: ISubmissionFeedbackDetail;
}) => {
    return (
        <Card>
            <div className="m-4 flex flex-col items-start gap-1">
                <div className="font-bold">
                    {highlightDetail.target_item}
                    {' -> '}
                    {highlightDetail.correct_item}
                </div>
                <div
                    className={`px-2 rounded-md bg-red-5 my-1 ${
                        FEEDBACK_TYPE_MAPPING[highlightDetail.feedback_type].badge_color
                    }`}
                >
                    {FEEDBACK_TYPE_MAPPING[highlightDetail.feedback_type].content}
                </div>

                <div className="">{highlightDetail.message}</div>
            </div>
        </Card>
    );
};

function SubmissionFeedbackDetail({ content, feedbacks }: Props) {
    const feedbacksDetailWithHighlight = (
        content: string,
        highlightDetail: ISubmissionFeedbackDetail[]
    ) => {
        if (highlightDetail.length === 0) {
            return <span>{content}</span>;
        }
        const regex = new RegExp(`(${highlightDetail.map((t) => t.target_item).join('|')})`, 'gi');
        const parts = content.split(regex);
        console.log(parts);
        return (
            <span style={{ whiteSpace: 'pre-line' }}>
                {parts.map((part: string, index: number) => {
                    const matchedItem = highlightDetail.find(
                        (item) => item.target_item.toLowerCase() === part.toLowerCase()
                    );
                    return matchedItem ? (
                        <span key={index}>
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <span
                                        className={`${
                                            FEEDBACK_TYPE_MAPPING[matchedItem.feedback_type]
                                                .text_color
                                        }`}
                                    >
                                        {part}
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="w-[480px] bg-transparent">
                                    <SubmisisonFeedbackDetailCardItem
                                        highlightDetail={matchedItem}
                                    />
                                </TooltipContent>
                            </Tooltip>
                        </span>
                    ) : (
                        <span key={index}>{part}</span>
                    );
                })}
            </span>
        );
    };

    return (
        <TooltipProvider>
            <div className="prose max-w-none">
                {feedbacksDetailWithHighlight(content, feedbacks)}
            </div>
        </TooltipProvider>
    );
}

export default SubmissionFeedbackDetail;
