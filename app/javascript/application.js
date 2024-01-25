// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const ReactRailsUJS = require('react_ujs');
window.document.onload = function(e){ 
  ReactRailsUJS.mountComponents(); 
}
global.ReactQuotesApp = require('../react_quotes_app').default;