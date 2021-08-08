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
      <div className={`${stylesNext.tooltip} ${isOpen ? "" : stylesNext.tooltiphidden}`} ref={tooltipRef} style={styles.popper} { ...attributes.popper }>
        TOOLTIP
        <Keymenu kbdkey={props.kbdkey}/>
      </div>
      </div>
  );
};

export default Key;