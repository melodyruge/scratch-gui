import React, { useRef, useEffect } from 'react';
import Moveable from 'moveable';
import './TextBox.css';

const TextBox = () => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const moveable = new Moveable(targetRef.current.parentNode, {
      target: targetRef.current,
      draggable: true,
      resizable: true,
      keepRatio: false,
      edge: false
    });

    moveableRef.current = moveable;

    return () => {
      moveable.destroy();
    };
  }, []);

  return (
    <div ref={targetRef} className="text-box">
      <textarea placeholder="Type hereeeeeeeeeeeeeeeeeeee..." />
    </div>
  );
};

export default TextBox;