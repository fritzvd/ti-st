var SensorTag = require('sensortag')

SensorTag.discover(function (tag) {
  tag.on('disconnect', function () {
    console.log('disconnected')
    process.exit(0)
  })

  tag.connectAndSetup()
})
