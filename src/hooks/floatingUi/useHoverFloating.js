import { useState } from "react";
import { useFloating, useInteractions, useHover, safePolygon, useTransitionStyles } from "@floating-ui/react";


const useHoverFloating = ({ optionsFloating, optionsTransitionStyles } ) => {
    
    const [open, onOpenChange] = useState(false);
    const { refs, floatingStyles, middlewareData, context } = useFloating({
        open,
        onOpenChange,
        ...optionsFloating
    });
    
    const {styles: transitionStyles} = useTransitionStyles(context, optionsTransitionStyles)
    
    const hover = useHover(context, {handleClose: safePolygon()});
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
    return {open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, transitionStyles};
}
export default useHoverFloating;
