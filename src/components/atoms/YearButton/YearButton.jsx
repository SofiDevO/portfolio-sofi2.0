
export default function YearButton({ year, currentYear, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`year__btn ${className}`}
        title={`View Graph for the year ${year}`}
      >
        {year}
      </button>
    );
  }