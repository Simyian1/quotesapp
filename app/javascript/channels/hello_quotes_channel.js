import CableReady from 'cable_ready'
import consumer from "./consumer"

consumer.subscriptions.create("HelloQuotesChannel", {
  received(data) {
    if (data.cableReady) CableReady.perform(data.operations)
    // Example: Update DOM when a new quote is received
    if (data.new_quote) {
      const quotesContainer = document.getElementById('quotes-container');
      if (quotesContainer) {
        quotesContainer.innerHTML += `<p>${data.new_quote}</p>`;
      }
    }
  }
});