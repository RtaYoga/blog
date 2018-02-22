import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
 Row,
 Col
} from 'reactstrap'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class CalendarComponent extends Component {

  AgendaEvent({ event }) {
    return (
      <div>
        <h3>{event.title}</h3>
        <h6>{event.desc}</h6>
      </div>
    )
  }

  TitleAccessor(details) {
    const { title, event: { desc } } = details
    console.log('details', details)
    return (
      <p>{`${title}: ${desc}`}</p>
    )
  }

  render() {
    const { Events: { upcomingEvents } } = this.props
    return (
      <Row>
        <Col lg={12}>
          <div style={{
            height: '500px',
            color: 'black'
          }}>
            <BigCalendar
              events={upcomingEvents}
              startAccessor='startDate'
              endAccessor='endDate'
              showMultiDayTimes
              step={30}
              defaultView="month"
              defaultDate={new Date()}
              components={{
                event: this.AgendaEvent,
                agenda: {
                  event: this.AgendaEvent
                },
                day: {
                  event: this.TitleAccessor
                },
                week: {
                  event: this.TitleAccessor
                },
                month: {
                  event: this.TitleAccessor
                }
              }}
            />
          </div>
        </Col>
      </Row>

    )
  }

}


const mapStoreToProps = (store, props) => {
  return {
    Events: store.Events
  }
}

const Calendar = connect(mapStoreToProps)(CalendarComponent)

export default Calendar
