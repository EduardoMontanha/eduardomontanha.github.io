## runtime

Contains test runtime data.

Parameter | Type | Description
--- | --- | ---
`runtime.total` | *integer* | Total time spent executing the test, in milisseconds.
`runtime.details` | *array* | Each function call already ran by the test, and the amount of milisseconds required.

```javascript
t1234.runtime.total   // returns 18 (example)
t1234.runtime.details   // returns [ "test start >> 2ms", "checkPageType() >> 0ms", "bindEvents() >> 8ms", "init() >> 8ms" ] (example)
```

---

## campaign

Contains campaign related information.

Parameter | Type | Description
--- | --- | ---
`campaign.mbox` | *string* | Name of the mbox running the test's code
`campaign.number` | *string* | Campaign number
`campaign.id` | *string* | Campaign ID on Adobe Target
`campaign.recipe.id` | *string* | Recipe ID
`campaign.recipe.name` | *string* | Recipe Name

```javascript
t1234.campaign.mbox   // returns "dell-global-mbox" (example)
t1234.campaign.number   // returns "1234" (example)
t1234.campaign.id   // returns "85557" (example)
t1234.campaign.recipe.id   // returns "B" (example)
t1234.campaign.recipe.name   // returns "B. Recipe B Name" (example)
```

---

## user

Contains user related information.

Parameter | Type | Description
--- | --- | ---
`user.geoinfo` | *object* | User's geolocation data
`user.browser` | *string* | Browser being used to navigate on the test

```javascript
t1234.user.geoinfo   // returns { country: "brazil", state: "rio grande do sul", city: "eldorado do sul", zip: "99999-000", ip: "", dma: "not metroized" } (example)
t1234.user.browser   // returns "Chrome" (example)
```