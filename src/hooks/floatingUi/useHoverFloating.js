import { useState } from "react";
import { useFloating, useInteractions, useHover, safePolygon, useTransitionStyles, offset } from "@floating-ui/react";


const useHoverFloating = ({ optionsFloating, optionsTransitionStyles } ) => {

    const [open, onOpenChange] = useState(false);
    const { refs, floatingStyles, middlewareData, context } = useFloating({
        open,
        onOpenChange,
        ...optionsFloating
    });
    
    const {styles} = useTransitionStyles(context, optionsTransitionStyles)
    
    const hover = useHover(context, {handleClose: safePolygon()});
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
    return {open, onOpenChange, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, styles};
}
export default useHoverFloating;
