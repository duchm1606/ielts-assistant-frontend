'use client';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarGroup, SidebarGroupContent, SidebarInput } from '@/components/ui/sidebar';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2 } from 'lucide-react';
function page() {
    return (
        <div className="ml-2 mt-2">
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
            <div className="px-4 mt-4 flex flex-row justify-between">
                <div className="text-2xl font-bold">IELTS Writing Questions</div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="relative">
                        <SidebarInput
                            id="search"
                            placeholder="Search for question..."
                            className="max-w-[300px] pl-8"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                        />
                        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                    </div>
                    <Button className="h-[32px]" onClick={() => {}}>
                        <Plus className="-mr-1 h-[5px] w-[5px]" />
                        Create
                    </Button>
                </div>
            </div>
            {/* Modal
            <Dialog open={true}>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">Hi</div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog> */}
            {/* Add infinite scroll */}
            <div className="rounded-md shadow-md hover:bg-secondary-50 mx-4 mt-4 px-4 py-4">
                <div className="flex justify-between">
                    <div className="font-semibold text-lg">Daily Writing Task 1 #123</div>
                    <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-500" />
                </div>
                <div className="text-sm opacity-70">This is an example of the question</div>
                <div className="flex justify-between items-end">
                    {/* <Badge variant="secondary">Secondary</Badge> */}
                    <div className="rounded-md px-2 bg-secondary-100 bg-secondary text-xs">
                        Mixed
                    </div>
                    <div className="flex">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="font-bold text-3xl">30</div>
                            <div className="flex flex-col">
                                <div className=" text-sm font-semibold">Submitted</div>
                                <div className="text-xs opacity-50">Last 30 days</div>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="mx-2 h-10" />
                        <div className="flex flex-row gap-2 items-center">
                            <div className="font-bold text-3xl">6.4</div>
                            <div className="flex flex-col">
                                <div className=" text-sm font-semibold">Avg. score</div>
                                <div className="text-xs opacity-50">Last 30 days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
