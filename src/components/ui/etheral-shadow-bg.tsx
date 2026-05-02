'use client';

import { useState, useEffect } from 'react';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

export function EtheralShadowBg() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            <EtheralShadow
                color="rgba(26, 16, 48, 1)"
                animation={isTouch ? undefined : { scale: 60, speed: 40 }}
                noise={{ opacity: 0.6, scale: 1 }}
                sizing="fill"
            />
        </div>
    );
}
