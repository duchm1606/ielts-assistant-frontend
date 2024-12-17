'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResizableLayoutProps {
    leftContent: () => React.ReactNode;
    rightContent: () => React.ReactNode;
    initialLeftWidth?: number;
    minLeftWidth?: number;
    maxLeftWidth?: number;
}

export default function ResizableLayout({
    leftContent,
    rightContent,
    initialLeftWidth = 50,
    minLeftWidth = 20,
    maxLeftWidth = 80,
}: ResizableLayoutProps) {
    const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
    const [isDragging, setIsDragging] = useState(false);
    const [isRightContentVisible, setIsRightContentVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const separatorRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || !containerRef.current || !isRightContentVisible) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

            setLeftWidth((prevWidth) => {
                const clampedWidth = Math.max(minLeftWidth, Math.min(maxLeftWidth, newLeftWidth));
                return Number(clampedWidth.toFixed(2));
            });
        },
        [isDragging, minLeftWidth, maxLeftWidth, isRightContentVisible]
    );

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    const toggleRightContent = () => {
        setIsRightContentVisible((prev) => !prev);
    };

    return (
        <div
            ref={containerRef}
            className="flex h-screen overflow-hidden"
            style={{ height: 'calc(100dvh - 80px)' }}
        >
            <div
                style={{ width: isRightContentVisible ? `${leftWidth}%` : '100%' }}
                className="relative rounded-md shadow-sm border mr-1"
            >
                {leftContent()}
            </div>
            {isRightContentVisible && (
                <>
                    <div
                        ref={separatorRef}
                        className="w-1 bg-transparent cursor-col-resize hover:bg-gray-300 active:bg-gray-400 transition-colors duration-200"
                        onMouseDown={handleMouseDown}
                        role="separator"
                        aria-valuenow={leftWidth}
                        aria-valuemin={minLeftWidth}
                        aria-valuemax={maxLeftWidth}
                        aria-orientation="vertical"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            const step = 1;
                            if (e.key === 'ArrowLeft') {
                                setLeftWidth((prev) => Math.max(minLeftWidth, prev - step));
                            } else if (e.key === 'ArrowRight') {
                                setLeftWidth((prev) => Math.min(maxLeftWidth, prev + step));
                            }
                        }}
                    />
                    <div
                        style={{ width: `${100 - leftWidth}%` }}
                        className="overflow-auto ml-1 border rounded-md shadow-sm"
                    >
                        {rightContent()}
                    </div>
                </>
            )}
        </div>
    );
}
