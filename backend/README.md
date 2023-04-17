This backend (lol not doing much right now) is designed to run golang on AWS Lambda.

How to: 
Log into AWS. I am currerntly using the root user and created a function `gogojenny`. The `Handler` function needs to be main. 

Then (running on an Apple Silicon machine!) run `GOOS=linux GOARCH=amd64 go build -o build/main main.go && cd build && zip main.zip main && cd ..`. This builds a `main.zip`. You upload this to AWS for the source of the function.

Then you can `aws lambda invoke --function-name gogojenny response.json` and see that the response. You just ran Go on AWS Lambda!

Why:
Idk. At the current time of building, Lambda has the most generous free tier for computation. I wanted a place to learn go and build an app. 