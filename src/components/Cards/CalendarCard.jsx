import "./Cards.css";

function CalendarCard() {

  const days = [
    "Mon","Tue","Wed","Thu","Fri","Sat","Sun",
    1,2,3,4,5,6,7,
    8,9,10,11,12,13,14,
    15,16,17,18,19,20,21,
    22,23,24,25,26,27,28
  ];

  return (
    <div className="card calendar-card">

      <div className="card-header">
        <h3>Mood Calendar</h3>
      </div>

      <div className="calendar-grid">

        {days.map((day,index)=>(
          <div key={index}>{day}</div>
        ))}

      </div>

    </div>
  );
}

export default CalendarCard;