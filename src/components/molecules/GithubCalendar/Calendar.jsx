import { useState } from "react";
import { Tooltip as MuiTooltip } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import YearButton from "@atoms/YearButton/YearButton";




function Calendar() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [activeButton, setActiveButton] = useState(new Date().getFullYear());

  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
    setActiveButton(year);
  };


  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
    },
  });


  return (
    <>
      <section className="calendar">
        <div className="calendar__container">
          <GitHubCalendar
            username="SofiDevO"
            year={selectedYear}
            weekStart={1}
            theme={{
              light: ["hsl(0, 0%, 9.411764705882353%)", "green"],
              dark: ["hsl(0, 0%, 16.07843137254902%)", "green"],
            }}
            renderBlock={(block, activity) => (
              <MuiTooltip
                title={`${activity.count} activities on ${activity.date}`}
              >
                {block}
              </MuiTooltip>
            )}
          />
        </div>
        <div className="year__buttons">
          {[2024, 2023, 2022].map((year) => (
            <YearButton
              key={year}
              year={year}
              currentYear={selectedYear}
              onClick={() => handleYearButtonClick(year)}
              className={activeButton === year ? "is-active" : ""}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Calendar;
