import React, { useState, useRef, useEffect } from 'react';
import { bool, string } from 'prop-types';
import { TooltipStyled, QuestionIconStyled } from './styled';

export const Tooltip = ({
  tooltipText,
  svgColor,
  rightTooltip,
  topTooltip,
}) => {
  const tooltipRef = useRef();
  const [opened, setOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const toggleTooltip = () => {
    setOpen(true);
  };

  return (
    <TooltipStyled
      opened={opened}
      topTooltip={topTooltip}
      rightTooltip={rightTooltip}
      ref={tooltipRef}
    >
      <button
        type="button"
        className="tooltip_btn"
        onClick={toggleTooltip}
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        <QuestionIconStyled color={svgColor} />
      </button>

      <div className="tooltip">{tooltipText}</div>
    </TooltipStyled>
  );
};

Tooltip.propTypes = {
  tooltipText: string.isRequired,
  svgColor: string,
  rightTooltip: bool,
  topTooltip: bool,
};
