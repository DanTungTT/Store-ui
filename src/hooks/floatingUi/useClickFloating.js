import { useEffect, useState } from "react";
import { useFloating, useInteractions, useHover, safePolygon, useTransitionStyles, useClick } from "@floating-ui/react";
import { arrow } from "@floating-ui/react";

const useClickFloating = (options) => {
    const [open, onOpenChange] = useState(false);
    const { refs, floatingStyles, middlewareData, context } = useFloating({
        open,
        onOpenChange,
        ...options?.optionsFloating
    });
    const { styles : transitionStyles } = useTransitionStyles(context, options?.optionsTransitionStyles || {})
 
    const click = useClick(context, {handleClose: safePolygon()});
    const { getReferenceProps, getFloatingProps } = useInteractions([click]);
    return {open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, transitionStyles};
}
export default useClickFloating;