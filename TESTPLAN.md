# Assignment:

Develop a test plan for the following user story:
> As a user, I want to be able to notify another user about a comment I made so that my comment get action faster

**Q:** How would you test this story?

**A: Approach**
1. I'd gather more background information first, as this story is clearly taken from the bigger context. Without that information preparing test plan will requires assuming too many input parameters which will lead to inefficient usage of resources.
__Assumptions:__
  - it is web application
  - time resource available: 1 hour. 15 minutes test setup, 30 minutes testing, 15 minutes for test notes and submitting issues. Further 1 hour available to automate the story providing there is a robust, easily extendable test framework available. Test data, test harnesses and CI/CD templates are also available.
2. Prepare a short plan to formally cover AC provided.
3. Question test plan on validity and prepare a recommendations for further exploratory tests based on risks for business and customers.
4. Explore logs and history of existing, similar or neighbouring issues to to a short smoke regression test.

**Q:** Specify exactly what steps you would run. And how you would assess success or failure of each test.

**A: Test suite:**

##### Test setup:
Create `User_receiver<N>` and `User_sender`, where `N` is a tuple of strings from `one` to `Five` (6 users in total)

##### Test case:

1. In different browsers or browser sessions (use incognito or private to disable cookies) open user `User_receiver` and `User_sender` message box.

2. Create new comment and start tying @.
    > - [ ] Pass if 4 users appeared to choose from. This validates "Maximum 4 users AC"

3. In receiver browser login as User_receiverFour. Start typing @User_receiver4
  > - [ ] Pass if only 1 user User_receiverFour is offered to be chosen

4. Choose offered user
  >- [ ] Pass if highlighted user name should appear in chat box

5. Type User_receiver6
  >- [ ] Pass if user is of different colour

6. Repeat 1-5 for edit comment, new and edit annotation

**Q:** Feel free to comment on the completeness or quality of the acceptance criteria.

**A: Comments on AC**
- doesn't specify if multi-language support is needed.
- criterion of active user (session expired or other status indiction and means to test)
- in #5 "existing functionality" missing reference data
-

- After tapping @ the performance might be compromised due to many active users. AC doesn't specify this edge case scenario.
- User name length

**Q**: Additional information you will need before you can begin testing.

**A: Additional info:**

- what is the objective of testing? Presumably it is AC but since it is not specified, that could be non-functional AC, ex. security.
- what platform? Browsers?
- surely beneficial extra background information about the app. What is business logic and domain. Who is the user?
- At what lifecycle this story at: bug retest, regression or etc. Is there a log of previous iterations?
- time and test resources allocated?
- is automation needed? How often regression testing and AC  test should be run.
- if tester can access the code or backend logs to utilise white box testing approach
- was error handling, reporting and monitoring implemented?


### UI automated Test script example using webdriver driven by Python:

```
test_setup():
  for postfix in ['one', 'two', 'three', 'four']
    user.create('User_receiver' + postfix) # user class instantiated in suite setup self. is omitted
    log('User created: ' + 'User_receiver' + postfix)
  user.create('User_sender')
  log('User_sender created')

@log
test_case_1():
  browserSender.('Chrome')
  browser1('appaddress').open()
  browserFeciever('Firefox')
  browser2.sendKeys('@UserReceiverO')
  if browser2.findByText('UserReceiverOne') return True # pass the case if element is visible
    else return False

  test_teardown():
```

  ### API test example using [**FrisbyJS** API test framework](frisbyjs.com) :

  1. Set up mockup interface in any mockup framework. In this example I use [Mocky.io (HTTP responses to test REST API)](mocky.io)

  2. frisbyjs script with example to partially cover AC 1:

  ```
  baselink = 'http://www.mocky.io/v2/'
  mockupID = '5185415ba171ea3a00704eed'
  // mockup endpoint was generated using mocky.io on 28 April. It may expire in a while

```
  // Consumer contract acceptance test suite

  // Test case 1. Verifies acceptane criteria 1: return active user on tapping '@ReceiverUserF'

  var frisby = require('frisby');
  frisby.create('Get active user on typing /@ReceiverUserF')
    .get(baselink + mockupID)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON('0', {
      place: function(val) { expect(val).toMatch("ReceiverUserFour"); }, //
    })
  .toss();

  ```
