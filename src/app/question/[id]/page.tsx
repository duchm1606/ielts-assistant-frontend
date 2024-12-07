import React from 'react';
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
import { FileText, History } from 'lucide-react';

export default function WritingQuestionPage() {
    const leftContent = (
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
                <p className="mb-4">
                    When the right content is visible, you can drag the separator to adjust the
                    width. The separator is only visible when you hover over it.
                </p>
                <p className="mb-4">
                    The dragging effect has been optimized for smoother performance.
                </p>
                <p className="mb-4">
                    This content area is now scrollable if the content exceeds the available height.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
                <p className="mb-4">
                    This is the left side of the resizable layout. You can use the button in the
                    top-right corner to toggle the right content visibility.
                </p>
            </div>
        </div>
    );

    const rightContent = (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Right Content</h2>
            <p>
                This is the right side of the resizable layout. It will adjust its size as you drag
                the separator, and can be toggled on/off using the button in the left content area.
            </p>
            <p className="mt-2">The resizing should now feel smoother and more responsive.</p>
            <ul className="list-disc list-inside mt-2">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );

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
