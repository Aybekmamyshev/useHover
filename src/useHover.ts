import {useEffect, useRef, useState} from "react";

export function useHover() {
    const ref = useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }
        const el = ref.current;

        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mousemove', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))

        return () => {
            el.removeEventListener('mouseenter', () => setHovered(true))
            el.removeEventListener('mousemove', () => setHovered(true))
            el.removeEventListener('mouseleave', () => setHovered(false))
        }


    }, [])


    return {ref, hovered}
}