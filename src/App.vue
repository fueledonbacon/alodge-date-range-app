<template>
  <div>
    <date-picker
      :minNights="1"
      @check-in-changed="from = $event"
      @check-out-changed="to = $event"
      />
    <button class="cta" @click="submit">Check Dates</button>
  </div>
</template>

<script>
import DatePicker from 'vue-hotel-datepicker'
console.info("Date Picker application is running")
export default {
  name: 'App',
  components: {
    DatePicker
  },
  computed: {
    hash(){
      const { formatDate } = this
      return `#checkin=${formatDate(this.from)}&checkout=${formatDate(this.to)}`
    }
  },
  data(){
    return {
      from: new Date(),
      to: new Date(),
    }
  },
  methods: {
    formatDate(date){
        let d = String(date.getUTCDate())
        let m = String(date.getUTCMonth() + 1)
        let y = String(date.getUTCFullYear())

        d = d.length == 1 ? `0${d}` : d
        m = m.length == 1 ? `0${m}` : m

        return [y,m,d].join("-")
    },
    submit(){
        location.href = `/booking?widget=1${this.hash}`
    }
  }
}
</script>

<style>
</style>
