# producer-consumer
# Node.JS Coding Challenge

The assignment is to build a simple Producer/Consumer system. In this system the Generator will send a series of random arithmetic expressions, while the Evaluator will accept these expressions, compute the result and then report the solution to the Generator.

----

## Requirements

At a minimum, the following must be implemented:

* The Producer and Consumer as separate NodeJS services.
* The Producer generating random addition expressions of two positive integers, e.g. "2+3="
* The Consumer computing and returning the correct mathematical result for the each expression it receives
* The Consumer successfully processing requests from two Producers concurrently at a rate of at least 1 req/sec from each Producer (2 req/sec in aggregate)
* The Consumer and Producer should log all messages they generate and receive.
* You are free to support more than simple addition, but it is not required.

The end product should:

* Be built in strict JavaScript and run with NodeJS
* NOT rely on any external services like Redis, ZeroMQ or similar technologies
* NOT use Express (Connect is Ok)
* Include UML Activity Diagram and UML Sequence Diagram documenting the business logic
* Include Unit tests

### UML Activity Diagram
![UML Activity Diagram](https://github.com/ronniebrown/producer-consumer/raw/master/assets/invision_activity_diagram.png "UML Activity Diagram")

### UML Sequence Diagram
![UML Sequence Diagram](https://github.com/ronniebrown/producer-consumer/raw/master/assets/invision_sequence_diagram.png "UML Sequence Diagram")

----

## Building/Installing Project

1) Clone the project locally
```sh
$ git clone https://github.com/ronniebrown/producer-consumer.git
```
2) Then install the npm packages
```sh
$ npm install
```

## Running Tests

The tests are built with Mocha & Chai

```sh
$ npm test
```

## Running the Producer and Consumer

Each Generator will require a separate terminal instance. 

Running the producer
```sh
$ npm run producer
```

Running the consumer
```sh
$ npm run consumer
```