"use client";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    )};

    const rightContent = () => {
        const [tabs, setTabs] = useState([
            { id: 'editorial', label: 'Editorial', icon: Edit },
            { id: 'submissions', label: 'Submissions', icon: Send },
          ])
          const [activeTab, setActiveTab] = useState(tabs[0].id)
          const removeTab = (tabId: string) => {
            const newTabs = tabs.filter(tab => tab.id !== tabId)
            setTabs(newTabs)
            if (activeTab === tabId && newTabs.length > 0) {
              setActiveTab(newTabs[0].id)
            }
          }
        return (
        <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="px-2 h-10 gap-2 bg-secondary-300 flex flex-col items-start">
                <TabsList className='bg-transparent rounded-none flex'>
                {tabs.map((tab, index) => (
                    <div className='flex flex-row items-center'>
                        <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className="data-[state=active]:bg-secondary-500 data-[state=active]:text-white gap-2"
                            >
                                <tab.icon className="h-4 w-4" />
                                {tab.label}
                            </TabsTrigger>
                        {index < tabs.length - 1 && <Separator orientation="vertical" className="h-4 bg-secondary-50 mx-1" />}
                    </div>
                    
                    ))}
                </TabsList>
                {tabs.map((tab) => {
                    return (
                        <TabsContent key={tab.id} value={tab.id} className="p-4">
                            {tab.id}
                        </TabsContent>
                    )
                })}
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
    )};

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
                    maxLeftWidth={80}
                />
            </div>
        </div>
    );
}
