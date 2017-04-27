Develop a test plan for the following user story.
How would you test this story? Specify exactly what steps you would run, and how you would
assess success or failure of each test. Feel free to comment on the completeness or quality of the
acceptance criteria. Note any additional information you will need before you can begin
testing.

> As a user, I want to be able to notify another user about a comment I made so that my

comment gets actions faster.

## Additional info:
- what is the objective of testing? Presumably it is AC but since it is not specified, that could be non-functional AC, ex. security.
- what platform? Browsers?
- surely beneficial extra background information about the app. What is business logic and domain. Who is the user?
- At what lifecycle this story at: bug retest, regression or etc. Is there a log of previous iterations?
- time and test resources allocated?
- is automation needed? How often regression testing and AC  test should be run.
- if tester can access the code or backend logs to utilise white box testing approach
- was error handling, reporting and monitoring implemented?

## Assumptions:
- it is web application
- time resource proposed: 1 hour. 15 minutes test setup, 30 minutes testing, 15 minutes for test notes and submitting issues

## Comments on AC
- doesn't specify multi-language support.
- criterion of active user (session expired or other status indiction and means to test)
- in #5 "existing functionality" missing reference data
-

- After tapping @ the performance might be detoriated due to many active users. AC doesn't specify this edge case senario.
- User name length


## Test setup:
Create User_receiver<N> and User_sender, where N is from 'one'...'Five' (6 users in total)

## Test case:
1. In different browsers or browser sessions (use incognito or private to disable cookies) open user User_receiver snd User_sender message box.
2. Create new comment and start tying @
  Pass if 4 users appeared to choose from. This validates "Maximum 4 users AC"
3. In receiver browser login as User_receiverFour. Start typing @User_receiver4
  Pass if only 1 user User_receiverFour is offered to be chosen
4. Choose offered user
  Pass if highlighted user name should appear in chat box
5. Type User_receiver6
  Pass if user is of different colour

  repeat for edit comment, new and edit annotation


## UI automated Test script example:

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


  ## API test example in js:
