import { useState, useRef, useLayoutEffect } from "react";
const useSlider = (listNoti) => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [diff, setDiff] = useState(0);

    const refWidthLi = useRef();
    const refUl = useRef();
    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.clientX);
    };
    const handleMouseMove = (e) => {
        if (!dragging) return;
        setDiff(e.clientX - startX);
        refUl.current.style.transform = `translate(${-refWidthLi.current.offsetWidth * currentIndex + diff}px)`;
    };
    const handleMouseUp = (e) => {
        if (dragging) {
            setDragging(false);
            diff < -1 && setCurrentIndex(currentIndex + 1);
            diff > 1 && setCurrentIndex(currentIndex - 1);
        }
    };
    const handleMouseLeave = () => {
        if (dragging) {
            setDragging((prev) => (prev = !prev));
            diff < -1 && setCurrentIndex(currentIndex + 1);
            diff > 1 && setCurrentIndex(currentIndex - 1);
        }
    };
    useLayoutEffect(() => {
        const autoSlide = setTimeout(() => {
            setDiff(NaN);
            setDragging(false);
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        const widthLi = refWidthLi.current.offsetWidth;
        
        refUl.current.style.transform = `translate(${-widthLi * currentIndex}px)`;
        currentIndex < 0 && setCurrentIndex(listNoti.length - 1);
        currentIndex > listNoti.length - 1 && setCurrentIndex(0);

        // clear animation
        return () => clearTimeout(autoSlide);
    }, [currentIndex]);

    const handleIndex = (index) => {
        setCurrentIndex(index);
    };
     return {refUl, refWidthLi, handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave, currentIndex, handleIndex}
 }
export default useSlider;