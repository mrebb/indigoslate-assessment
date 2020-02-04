export const CRUD_API_ENDPOINT = "https://crud-api.azurewebsites.net/api";

export const isOverlapEvent = (events, newEvent, id) => {
    return events.length>0 && events.filter(event => event.data.id!==id).find((event) => {
        const eventStart = new Date(event.data.dateTime).getTime();
        const eventEnd = eventStart + event.data.duration*60000
        const incomingEventStartTime = new Date(newEvent.dateTime).getTime();
        const incomingEventEndTime = incomingEventStartTime + newEvent.duration*60000;
        return  (incomingEventStartTime>= eventStart || incomingEventEndTime>= eventStart)
                && (incomingEventStartTime <= eventEnd || incomingEventEndTime <= eventEnd)

    });
};