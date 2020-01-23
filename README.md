## rngrocerylist

### An iOS and Android grocery list maker.

### **What is it for?**

Making and maintaining a grocery shopping list on your mobile device

### Requirements

This application is designed to work in congruence with:

`github.com/drkmcfrk/meteor-grocery-list`

### **Install**

#### Clone the repo:

`git clone git@github.com:drkmcfrk/rngrocerylist.git`

#### Navigate to project directory:

`cd rngrocerylist`

#### Create .env

Use included `.env.example` as reference

#### Install dependencies:

`yarn`

#### Link necessary dependencies:

`react-native link`

### **Usage**

#### Run it on a simulator:

`react-native run-ios`

**or**

`react-native run-android`

### **Known issues**

ReactNative's ListView (which is used by `react-native-meteor`) has been deprecated. A warning referencing this will appear in console, and yellow-box in simulator.
