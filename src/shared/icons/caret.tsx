interface CaretIconProps {
  direction?: 'left' | 'right';
  stroke?: string;
  classname?: string;
}

export function CaretIcon({ direction = 'left', stroke = '#42567A', classname }: CaretIconProps) {
  return (
    <svg
      style={{ rotate: direction === 'right' ? '180deg' : '0deg' }}
      fill="none"
      viewBox="0 0 6 8"
      xmlns="http://www.w3.org/2000/svg"
      className={`caretIcon ${classname}`}
    >
      <title>{direction === 'left' ? 'Previous' : 'Next'}</title>
      <path d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178" stroke={stroke} stroke-width="2" />
    </svg>
  );
}
