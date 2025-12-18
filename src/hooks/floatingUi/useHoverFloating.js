import { useEffect, useState } from "react";
import { useFloating, useInteractions, useHover, safePolygon, useTransitionStyles } from "@floating-ui/react";
import { arrow } from "@floating-ui/react";

const useHoverFloating = (options) => {
    const [open, onOpenChange] = useState(false);
    const { refs, floatingStyles, middlewareData, context } = useFloating({
        open,
        onOpenChange,
        ...options?.optionsFloating
    });
    const { styles : transitionStyles } = useTransitionStyles(context, options?.optionsTransitionStyles || {})
 
    const hover = useHover(context, {handleClose: safePolygon()});
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
    return {open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, transitionStyles};
}
export default useHoverFloating;
