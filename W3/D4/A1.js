// 1. Initial queue with at least 5 tickets
let tickets = [
    { id: "T101", priority: "HIGH", resolved: false },
    { id: "T102", priority: "LOW", resolved: false },
    { id: "T103", priority: "MEDIUM", resolved: true },
    { id: "T104", priority: "MEDIUM", resolved: true },
    { id: "T105", priority: "HIGH", resolved: false }
    
  ];
  
  tickets.unshift({ id: "T106", priority: "HIGH", resolved: false });
  
  tickets.push(
    { id: "T107", priority: "LOW", resolved: false },
    { id: "T108", priority: "MEDIUM", resolved: true }
  );
  
  
  let currentTicket = tickets.shift();
  
  
  let droppedTicket = tickets.pop();
  
  
  let pending = tickets.filter(ticket => ticket.resolved === false);
  
  
  let pendingIds = pending.map(ticket => ticket.id);
  
  console.log("Current Ticket:", currentTicket);
  console.log("Dropped Ticket:", droppedTicket);
  console.log("Pending Tickets:", pending);
  console.log("Pending Ticket IDs:", pendingIds);