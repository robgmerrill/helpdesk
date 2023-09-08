import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export const metadata = {
  title: 'Helpdesk | Tickets',
}

function Tickets() {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p><small>Currently open tickets</small></p>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

export default Tickets
