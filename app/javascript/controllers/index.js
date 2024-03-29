import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import StimulusReflex from 'stimulus_reflex'
import consumer from '../channels/consumer'


const application = Application.start()
const context = require.context(".", true, /\.js$/)
application.load(definitionsFromContext(context))

StimulusReflex.initialize(application, { consumer })