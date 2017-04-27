baselink = 'http://www.mocky.io/v2/'
mockupID = '5185415ba171ea3a00704eed'
// mockup endpooint was generated using mocky.io on 28 April. It may expire in a whipe

// Consumer contract acceptane test suite

// Test case 1. Verifies acceptane criteria 1: return active user on tapping @ReceiverUserF
var frisby = require('frisby');
frisby.create('Get active users list')
  .get(baselink + mockupID)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON('0', {
    place: function(val) { expect(val).toMatchOrBeNull("ReceiverUserFour, OK"); }, // Custom matcher callback
    user: {
      active: true,
      name: "Oklahoma City, OK"
    }
  })
.toss();
