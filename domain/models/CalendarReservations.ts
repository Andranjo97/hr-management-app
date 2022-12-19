import CalendarReservationTypes from './CalendarReservationTypes';

abstract class CalendarReservations {
    id: string;
    type: CalendarReservationTypes;

    public abstract fromJson(jsonMap: { [key: string]: any; }): CalendarReservations;
}


class PTOVacation extends CalendarReservations {
    fromJson(jsonMap: { [key: string]: any; }): PTOVacation {
        return new PTOVacation();
    }
}

export { PTOVacation };
