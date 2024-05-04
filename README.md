# Lab 5 - Starter
Brandon Panuco, Charlie Trinh
## Expose
https://bpanuco11.github.io/Lab5_Starter/expose.html
## Explore
https://bpanuco11.github.io/Lab5_Starter/explore.html


Questions: 
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, we shouldn't use a unit test for this since it wouldn't properly check to see if the message they are sending is ok. The test may fail not because it couldn't send the message due to some bug but because the test sent a message that caused the program to fail the test. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.'

We should use a unit test for this since we can check to see if the user inputted more than 80 characters, allowing the developer to understand if something was bugging their program because if their program failed then they didn't properly code the prevention function properly.
