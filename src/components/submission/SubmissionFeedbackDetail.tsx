'use client';
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ISubmissionFeedbackDetail } from '@/type/ielts-submission';
import { Card } from '../ui/card';

interface Props {
  content: string
  feedbacks: ISubmissionFeedbackDetail[]
}

function SubmissionFeedbackDetail({
  content,
  feedbacks
}: Props) {

  const feedbacksDetailWithHighlight = (content: string, highlightDetail: ISubmissionFeedbackDetail[]) => {
    if (highlightDetail.length === 0) {
      return <span>{content}</span>
    }
    const regex = new RegExp(`(${highlightDetail.map(t => t.word).join('|')})`, 'gi');
    const parts = content.split(regex);
    console.log(parts);
    return (
      <span>
        {
          parts.map((part: string, index: number) => {
           const matchedItem = highlightDetail.find(item => item.word.toLowerCase() === part.toLowerCase());
           return matchedItem ? (
            <Tooltip key = {index}>
              <TooltipTrigger>
                <span className='bg-green-200'>{part}</span>
              </TooltipTrigger>
              <TooltipContent side="top" className="w-[480px] bg-transparent">
                <Card >
                  <div className='m-2'>
                  {matchedItem.feedback}
                  </div>
                </Card>
              </TooltipContent>
            </Tooltip>
           ): (
              <span key={index}>{part}</span>
           )})
        }
      </span>
    )
  }

  return (
    <TooltipProvider>
      <div className='prose max-w-none'>
      {feedbacksDetailWithHighlight(content, feedbacks)}
      </div>
    </TooltipProvider>
  )
}

export default SubmissionFeedbackDetail