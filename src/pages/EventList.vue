<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 342524552,
          category: "animal",
          title: "Cat adoption",
          description: "Find your new pet",
          location: "Meow Town",
          date: "Jan 28",
          time: "12:00",
          petsAllowed: true,
          organizer: "Kat Laydee",
        },
        {
          id: 45345524552,
          category: "food",
          title: "Gardening",
          description: "Join us",
          location: "Florida",
          date: "Mar 14, 2022",
          time: "10:00",
          petsAllowed: true,
          organizer: "Fern Pollin",
        },
        {
          id: 653644552,
          category: "sustainability",
          title: "Forest day",
          description: "Help to clean",
          location: "PLaya Del Carmen",
          date: "July 22, 2022",
          time: "11:00",
          petsAllowed: false,
          organizer: "Carey Forest",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
