import React, { useState,useRef } from 'react';
import { usePopper } from 'react-popper';
import stylesNext from './Key.module.css'
import Keymenu from '../keymenu'

const Key = (props) => {
  const[isOpen, setIsOpen] = useState(false);

  const [arrowElement, setArrowElement] = useState(null);
  const boxRef = useRef();
  const tooltipRef = useRef();
  const { styles, attributes } = usePopper(boxRef.current, tooltipRef.current, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  const onClickHeader = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={stylesNext.key}>
      <div ref={boxRef}>
        <a onClick={onClickHeader} className={stylesNext.content}>
          {props.kbdkey}
        </a>    
      </div>

      {props.kbdkey != ""?
        <div className={`lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ${stylesNext.tooltip} ${isOpen ? "" : stylesNext.tooltiphidden}`} ref={tooltipRef} style={styles.popper} {...attributes.popper}>
       
          <p className="text-xs mt-3">Mapping for Key <span className="font-bold text-xl">{props.kbdkey}</span></p>
          <Keymenu kbdkey={props.kbdkey} onsetmap={props.handleMapUpdate} />
    
        </div>:null}
        
         
      
      </div>
  );
};

export default Key;