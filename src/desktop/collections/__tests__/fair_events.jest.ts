import { fabricate } from "@artsy/antigravity"
const FairEvent = require("../../models/fair_event.coffee")
const FairEvents = require("../fair_events.coffee")

describe("FairEvents", () => {
  let fairEvent1
  let fairEvent2
  let fairEvent3

  beforeAll(() => {
    fairEvent1 = new FairEvent(fabricate("fair_event"), {
      fairId: "armory-show-2013",
    })
    fairEvent2 = new FairEvent(
      fabricate("fair_event", {
        name: "March third",
        start_at: "2014-03-05T17:15:00+00:00",
      }),
      { fairId: "armory-show-2013" }
    )
    fairEvent3 = new FairEvent(
      fabricate("fair_event", {
        name: "March tenth",
        start_at: "2014-10-05T17:15:00+00:00",
      }),
      { fairId: "armory-show-2013" }
    )
  })

  describe("#initialize", () => {
    it("sets the fairId", () => {
      const fairEvents = new FairEvents([fairEvent1], {
        fairId: "armory-show-2013",
      })
      fairEvents.fairId.should.equal("armory-show-2013")
    })
  })

  describe("#sortedEvents", () => {
    it("sorts the events by start_at", () => {
      const fairEvents = new FairEvents([fairEvent1, fairEvent2, fairEvent3], {
        fairId: "armory-show-2013",
      })
      const sorted = fairEvents.sortedEvents()

      sorted["Wednesday"][0].attributes.name.should.equal("March third")
      sorted["Wednesday"][0].attributes.start_at.should.equal(
        "2014-03-05T17:15:00+00:00"
      )
      sorted["Saturday"][0].attributes.name.should.equal("Welcome")
      sorted["Saturday"][0].attributes.start_at.should.equal(
        "2014-03-08T17:15:00+00:00"
      )
      sorted["Sunday"][0].attributes.name.should.equal("March tenth")
      sorted["Sunday"][0].attributes.start_at.should.equal(
        "2014-10-05T17:15:00+00:00"
      )
    })
  })
})
