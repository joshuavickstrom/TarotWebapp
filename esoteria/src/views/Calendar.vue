<script setup>
import MoonPhases from '../data/moonPhases.json';
import DayTile from '../components/DayTile.vue';
import axios from "axios";

</script>
<template>
    <div class="calendar">
      <DayTile id="todayTile" :header="thisSunday.header" :phase="thisSunday.phase" :code="thisSunday.unicode" :date="thisSunday.date"></DayTile>
      <DayTile :header="thisMonday.header" :phase="thisMonday.phase" :code="thisMonday.unicode" :date="thisMonday.date"></DayTile>
      <DayTile :header="thisTuesday.header" :phase="thisTuesday.phase" :code="thisTuesday.unicode" :date="thisTuesday.date"></DayTile>
      <DayTile :header="thisWednesday.header" :phase="thisWednesday.phase" :code="thisWednesday.unicode" :date="thisWednesday.date"></DayTile>
      <DayTile :header="thisThursday.header" :phase="thisThursday.phase" :code="thisThursday.unicode" :date="thisThursday.date"></DayTile>
      <DayTile :header="thisFriday.header" :phase="thisFriday.phase" :code="thisFriday.unicode" :date="thisFriday.date"></DayTile>
      <DayTile :header="thisSaturday.header" :phase="thisSaturday.phase" :code="thisSaturday.unicode" :date="thisSaturday.date"></DayTile>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        authString: btoa(`992aba9d-c7d8-41ee-abdd-c8de26cc8e29:${import.meta.env.VITE_ASTRO_AI}`),
        allPhases: MoonPhases.moonPhases,
        thisWeek: "",
        thisSunday: "",
        thisMonday: "",
        thisTuesday: "",
        thisWednesday: "",
        thisThursday: "",
        thisFriday: "",
        thisSaturday: "",
      }
    },
    mounted() {
      this.GetWeek();
    },
  methods: {
    GetWeek() {
      let fdWeek = new Date();
      let sunday = new Date();
      sunday.setTime(fdWeek.setUTCHours(24));
      let monday = new Date();
      monday.setTime(fdWeek.setUTCHours(24));
      let tuesday = new Date();
      tuesday.setTime(fdWeek.setUTCHours(24));
      let wednesday = new Date();
      wednesday.setTime(fdWeek.setUTCHours(24));
      let thursday = new Date();
      thursday.setTime(fdWeek.setUTCHours(24));
      let friday = new Date();
      friday.setTime(fdWeek.setUTCHours(24));
      let saturday = new Date();
      saturday.setTime(fdWeek.setUTCHours(24));

      this.SetTileText(sunday, "thisSunday");
      this.SetTileText(monday, "thisMonday");
      this.SetTileText(tuesday, "thisTuesday");
      this.SetTileText(wednesday, "thisWednesday");
      this.SetTileText(thursday, "thisThursday");
      this.SetTileText(friday, "thisFriday");
      this.SetTileText(saturday, "thisSaturday");
    },
    SetTileText(d, obj) {
      let text = d.toString();
      let header = text.slice(0, 3);
      let date = text.slice(4, 10);
      const offset = d.getTimezoneOffset();
        d = new Date(d.getTime() - (offset*60*1000));
        const formattedDate = d.toISOString().split('T')[0];
        axios.get(`https://api.astronomyapi.com/api/v2/bodies/positions/moon?latitude=41.85003&longitude=-87.65005&elevation=597&from_date=${formattedDate}&to_date=${formattedDate}&time=15%3A01%3A28`, {
          headers: {
            Authorization: `Basic ${this.authString}`
          },
        }).then((res) => {
          let phase = res.data.data.table.rows[0].cells[0].extraInfo.phase.string;
          let phaseData = this.GetPhaseUnicode(phase);
          this[obj] = {
              header : header,
              phase : phase,
              unicode: phaseData.unicode,
              date : date
            }
          console.log(this[obj]);
        }).catch((err) => console.error(err));
    },
    GetPhaseUnicode(phase) {
      return this.allPhases.find(x => x.phaseName.includes(phase));
    }
  }
}
</script>
  <style>
  .calendar {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .calendar {
      display: flex;
      align-items: center;
    }
  }
  </style>
  